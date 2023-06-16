/**
 * @file Tag list page

 */

import React, { useEffect, useState } from 'react'
import {
  Table,
  Button,
  Card,
  Input,
  Divider,
  Spin,
  Modal,
  Space,
  notification,
  Typography,
  Select,
  DatePicker,
} from 'antd'
import * as Icon from '@ant-design/icons'
import { DropdownMenu } from '@/components/common/DropdownMenu'

import styles from './style.module.less'
import { useTranslation } from 'react-i18next'
import { PAGE_TABLE } from '@/constants/page'
import i18n from '@/i18n/i18n'
import { FormType } from '@/models/form'
import { ResponseError } from '@/pages/api'
import { EXPORT_POSTFIX_FORMAT, FORMAT } from '@/constants/date'
import moment from 'moment'
import { ActiveStatus, activeStatuses } from '@/models/status'
import type { ColumnsType } from 'antd/es/table'
import { Classification, Customer } from './model'
import { Props } from './components/Form'
import {
  useDeleteCustomerMutation,
  useGetIndexCustomerQuery,
  useUpdateFieldCustomerMutation,
} from './apiSlice'
import { generateEndpointVersionning, mappingQueryToApiQuery } from '@/utils/api'
import { DateFormat, TimeFormat } from '@/models/time'
import { exportFile } from '@/utils/file'
import { buildQueryFromObject, removeNullish } from '@/services/axiosHelper'

export function CustomerPage() {
  const { t } = useTranslation('translation', { i18n })
  // query api
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGE_TABLE.PERPAGE)
  const [keyword, setKeyword] = useState('')
  const [status, setStatus] = useState<ActiveStatus[]>([])
  const [sortInfo, setSortInfo] = useState<{
    field: string | undefined
    order: string | number | undefined
  }>({ field: undefined, order: undefined })
  const {
    data: result,
    isFetching,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetIndexCustomerQuery({
    ...mappingQueryToApiQuery({
      currentPage,
      pageSize,
      keyword,
      sortInfo,
      status: status.join(','),
    }),
  })
  const [updateCustomer, { isLoading: isLoadingUpdate }] = useUpdateFieldCustomerMutation()
  const [deleteCustomer, { isLoading: isLoadingDelete }] = useDeleteCustomerMutation()
  // state
  const [keywordInput, setKeywordInput] = useState('')
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [formData, setFormData] = useState<Customer | undefined>()
  // permission
  // handle action
  const resetParamsAndRefresh = () => {
    setCurrentPage(1)
    setPageSize(PAGE_TABLE.PERPAGE)
    setSortInfo({ field: undefined, order: undefined })
    setKeyword('')
    setStatus([])
    setKeywordInput('')
    refetch()
  }
  const handleUpdate = (customer: Customer) => {
    setFormData(customer)
    handleOpenModal()
  }
  const handleDelete = (customer: Customer) => {
    Modal.confirm({
      title: `${t('general.delete-helper-text')} ${customer.fullname}?`,
      content: t('general.delete-warning-text'),
      centered: true,
      onOk: () => {
        deleteCustomer(customer._id)
          .unwrap()
          .then(() => {
            notification.success({
              message: t('api.delete-successfully'),
            })
          })
          .catch((err: ResponseError) => {
            notification.error({
              message: err.statusText,
            })
          })
      },
    })
  }
  const handleOpenModal = () => {
    setIsOpenModal(true)
  }
  const handleCloseModal = () => {
    setIsOpenModal(false)
    setFormData(undefined)
  }

  const handleExport = () => {
    exportFile(
      generateEndpointVersionning({
        endpoint: `/customer/export?${buildQueryFromObject(
          removeNullish({ keyword, status: status.join(',') ? status.join(',') : '0,1' })
        )}`,
      }),
      `CustomerData_${moment().format(EXPORT_POSTFIX_FORMAT)}`
    )
  }
  // handle get error
  useEffect(() => {
    if (isError) {
      notification.error({
        message: (error as ResponseError)?.statusText,
      })
    }
  }, [isError])

  return (
    <Card
      title={`${t('customer-feature.title')} (${result?.result.pagination.total ?? '-'})`}
      className={styles.tag}
      extra={
        <Space>
          <Button
            type="primary"
            size="middle"
            icon={<Icon.DownloadOutlined />}
            onClick={handleExport}
          >
            {t('customer-feature.Export')}
          </Button>
          <Button
            type="primary"
            size="middle"
            icon={<Icon.PlusOutlined />}
            onClick={() => handleOpenModal()}
          >
            {t('general.add-new')}
          </Button>
        </Space>
      }
    >
      <Space className={styles.toolbar}>
        <Space wrap>
          <Input.Search
            loading={isFetching}
            className={styles.search}
            placeholder={t('general.search')}
            onSearch={() => {
              setCurrentPage(1)
              setKeyword(keywordInput)
            }}
            value={keywordInput}
            onChange={(event) => {
              setKeywordInput(event.target.value)
            }}
          />
          <Select
            loading={isFetching}
            className={styles.select}
            dropdownMatchSelectWidth
            showSearch={false}
            mode="multiple"
            onChange={(e) => {
              setCurrentPage(1)
              setStatus(e)
            }}
            value={status}
            allowClear
            showArrow
            placeholder={t('general.status')}
            options={[
              ...activeStatuses.map((status) => {
                return {
                  value: status.id,
                  label: (
                    <Space>
                      {status.icon}
                      {t(`general.${status.name}`)}
                    </Space>
                  ),
                }
              }),
            ]}
          />
          <Button
            loading={isFetching}
            icon={<Icon.ReloadOutlined />}
            onClick={resetParamsAndRefresh}
          >
            {t('general.reset-or-refresh')}
          </Button>
        </Space>
      </Space>
      <Divider />
      <Table
        rowKey="_id"
        onChange={(_, __, sorter: any) => {
          setSortInfo({
            field: sorter.field,
            order: !sorter.order ? undefined : PAGE_TABLE.mapValueFormKey(sorter.order),
          })
        }}
        loading={isFetching}
        dataSource={result?.result.data}
        pagination={{
          pageSizeOptions: PAGE_TABLE.PAGE_SIZE_OPTIONS,
          current: currentPage,
          pageSize: pageSize,
          total: result?.result.pagination.total ?? 0,
          showSizeChanger: true,
          onChange(page, pageSize) {
            setCurrentPage(page)
            setPageSize(pageSize)
          },
        }}
        columns={[
          {
            title: t('customer-feature.fullname'),
            dataIndex: 'fullname',
          },
          {
            title: t('customer-feature.phone'),
            dataIndex: 'phone',
          },
          {
            title: t('customer-feature.last-call'),
            render: (_, customer) => {
              return moment(customer.lastCall).format(`${DateFormat.YMD} ${TimeFormat['24h']}`)
            },
          },
          {
            title: 'Duration(s)',
            render: (_, customer) => {
              return customer.duration ?? '--'
            },
          },
          {
            title: t('customer-feature.classification'),
            render: (_, customer) => {
              return (customer.classification as Classification).name
            },
          },
          {
            title: t('customer-feature.status'),
            dataIndex: 'status',
            render: (_, customer) => {
              return (
                <Select
                  loading={isLoadingUpdate}
                  dropdownMatchSelectWidth
                  onChange={(e) => {
                    updateCustomer({ _id: customer._id, status: e })
                      .unwrap()
                      .then(() => notification.success({ message: t('api.update-successfully') }))
                      .catch((err: ResponseError) => {
                        notification.error({
                          message: err.statusText,
                        })
                      })
                  }}
                  value={customer.status}
                  options={[
                    ...activeStatuses.map((status) => {
                      return {
                        value: status.id,
                        label: (
                          <Space>
                            {status.icon}
                            {t(`general.${status.name}`)}
                          </Space>
                        ),
                      }
                    }),
                  ]}
                />
              )
            },
          },
          {
            title: t('customer-feature.actions'),
            render: (_, customer) => (
              <Space direction="horizontal">
                <Button
                  loading={isLoadingUpdate || isLoadingDelete}
                  size="middle"
                  icon={<Icon.EditOutlined />}
                  onClick={() => handleUpdate(customer)}
                ></Button>
                <Button
                  loading={isLoadingUpdate || isLoadingDelete}
                  size="middle"
                  danger={true}
                  icon={<Icon.DeleteOutlined />}
                  onClick={() => handleDelete(customer)}
                ></Button>
              </Space>
            ),
          },
        ]}
      />
    </Card>
  )
}

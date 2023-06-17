/**
 * @file Tag list page

 */

import React, { useEffect, useState } from 'react'
import {
  Table,
  Button,
  Input,
  Divider,
  Modal,
  Space,
  Typography,
  Select,
  theme,
  Dropdown,
  MenuProps,
  Switch,
  Tag,
  Tooltip,
  Col,
  Row,
  DatePicker,
} from 'antd'
import * as Icon from '@ant-design/icons'

import { PAGE_TABLE } from '@/constants/page'
import { mockData } from './mock-data'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { RouteKey, rc } from '@/routes'
import { Team } from './model'

import { useRef } from 'react'
import { Canvas, MeshProps, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Mesh, BufferGeometry, NormalBufferAttributes, Material, Color } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import myFont from 'public/fonts/Inter_Regular.json'

export const ResultTeamPage = () => {
  // hooks
  const { token } = theme.useToken()
  // query api
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGE_TABLE.PERPAGE)
  const [keyword, setKeyword] = useState('')
  const [sortInfo, setSortInfo] = useState<{
    field: string | undefined
    order: string | number | undefined
  }>({ field: undefined, order: undefined })

  // state
  const [keywordInput, setKeywordInput] = useState('')

  // handle action
  const resetParamsAndRefresh = () => {
    setCurrentPage(1)
    setPageSize(PAGE_TABLE.PERPAGE)
    setSortInfo({ field: undefined, order: undefined })
    setKeyword('')
    setKeywordInput('')
  }

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space align="start">
        <Space wrap>
          <DatePicker.YearPicker defaultValue={moment()} />
          <Button loading={false} icon={<Icon.ReloadOutlined />} onClick={resetParamsAndRefresh}>
            Refresh
          </Button>
        </Space>
      </Space>
      <Typography.Text strong>Chart</Typography.Text>
      <Chart teams={mockData} />
      <Space>
        <Input.Search
          loading={false}
          allowClear
          placeholder="Search..."
          onSearch={() => {
            setCurrentPage(1)
            setKeyword(keywordInput)
          }}
          value={keywordInput}
          onChange={(event) => {
            setKeywordInput(event.target.value)
          }}
        />
      </Space>
      <Table
        rowKey="_id"
        onChange={(_, __, sorter: any) => {
          setSortInfo({
            field: sorter.field,
            order: !sorter.order ? undefined : PAGE_TABLE.mapValueFormKey(sorter.order),
          })
        }}
        loading={false}
        dataSource={mockData}
        pagination={{
          pageSizeOptions: PAGE_TABLE.PAGE_SIZE_OPTIONS,
          current: currentPage,
          pageSize: pageSize,
          total: mockData.length,
          showTotal: (total) => `Total: ${total}`,
          showSizeChanger: true,
          onChange: (page, pageSize) => {
            setCurrentPage(page)
            setPageSize(pageSize)
          },
        }}
        columns={[
          {
            title: 'POS',
            dataIndex: 'Pos',
            sorter: true,
            render: (_, team) => team['Pos'],
          },
          {
            title: 'TEAM',
            dataIndex: 'Team',
            sorter: true,
            render: (_, team) => team['Team'],
          },
          {
            title: 'PTS',
            dataIndex: 'PTS',
            sorter: true,
            width: '30%',
            align: 'center',
            render: (_, team) => team['PTS'],
          },
        ]}
      />
    </Space>
  )
}

function Box(
  props: MeshProps & {
    color?: Color
    dimen?:
      | [
          width?: number | undefined,
          height?: number | undefined,
          depth?: number | undefined,
          widthSegments?: number | undefined,
          heightSegments?: number | undefined,
          depthSegments?: number | undefined
        ]
      | undefined
  }
) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]> | null>(
    null
  )
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={props.dimen ?? [1, 1, 1]} />
      <meshStandardMaterial color={props.color ?? 'orange'} />
    </mesh>
  )
}
const colorsDefault = [
  '06D6A0',
  '001219',
  '005F73',
  '94D2BD',
  'E9D8A6',
  'EE9B00',
  'CA6702',
  'AE2012',
  '9B2226',
  '06D6A0',
]
extend({ TextGeometry })
function Chart({ teams }: React.PropsWithChildren<{ teams: Team[] }>) {
  const font = new FontLoader().parse(myFont)
  let ptsList = teams
    .map((team) => team.histories.map((his) => his.PTS))
    .reduce((acc, cur) => acc.concat(cur), [])
  const maxAxisY = Math.max(...ptsList) + 1
  return (
    <Canvas style={{ height: '100vh' }} camera={{ position: [3, 5, 20] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[0, 0, -10]} angle={0.15} penumbra={1} />
      <pointLight position={[0, 0, -10]} />
      {teams.map((item, idx) => {
        const color = `#${colorsDefault[idx]}` as unknown as Color
        return (
          <>
            {item.histories.map((history, _idx) => (
              <>
                {history.PTS !== 0 && (
                  <mesh position={[_idx * 1.2 - 0.2, history.PTS / 4 + 0.2, idx * 1.2]}>
                    <textGeometry
                      args={[history.PTS.toString(), { font, size: 0.3, height: 0.1 }]}
                    />
                    <meshLambertMaterial attach="material" color={color} />
                  </mesh>
                )}
                <Box
                  key={`${idx}_${_idx}`}
                  dimen={[1, history.PTS / 4, 0.5]}
                  position={[_idx * 1.2, history.PTS / 8, idx * 1.2]}
                  color={color}
                />
              </>
            ))}
            <mesh position={[item.histories.length * 1.2, 0, idx * 1.2]}>
              <textGeometry args={[item.Team, { font, size: 0.3, height: 0.1 }]} />
              <meshLambertMaterial attach="material" color={color} />
            </mesh>
          </>
        )
      })}
      {/* Axis --------- */}
      <Box
        dimen={[teams[0]?.histories.length * 1.2, 0.1, 0.1]}
        position={[(teams[0]?.histories.length * 1.2) / 2 - 0.5, 0, teams.length * 1.2]}
      />
      <mesh
        position={[teams[0]?.histories.length * 1.2 - 0.5, 0, teams.length * 1.2]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <coneGeometry args={[0.15, 0.3, 10]} />
        <meshLambertMaterial attach="material" color="orange" />
      </mesh>
      <mesh position={[teams[0]?.histories.length * 1.2, 0, teams.length * 1.2]}>
        <textGeometry args={['DATE', { font, size: 0.3, height: 0.1 }]} />
        <meshLambertMaterial attach="material" color="orange" />
      </mesh>
      <Box
        dimen={[0.1, maxAxisY / 4, 0.1]}
        position={[-0.5, maxAxisY / 8 - 0.05, teams.length * 1.2]}
      />
      <mesh position={[-0.5, maxAxisY / 4 - 0.05, teams.length * 1.2]}>
        <coneGeometry args={[0.15, 0.3, 10]} />
        <meshLambertMaterial attach="material" color="orange" />
      </mesh>
      <mesh position={[-1, maxAxisY / 4 + 0.2, teams.length * 1.2]}>
        <textGeometry args={['PTS', { font, size: 0.3, height: 0.1 }]} />
        <meshLambertMaterial attach="material" color="orange" />
      </mesh>
      {teams[0].histories.map((his, idx) => (
        <mesh position={[idx * 1.2, -0.5, teams.length * 1.2]} rotation={[0, -Math.PI * 0.25, 0]}>
          <textGeometry args={[his.Date, { font, size: 0.3, height: 0.1 }]} />
          <meshLambertMaterial attach="material" color="orange" />
        </mesh>
      ))}
      {/* ---------- */}
      <OrbitControls />
    </Canvas>
  )
}

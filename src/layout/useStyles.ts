import { theme } from 'antd'
import { CSSProperties } from 'react'

export const useStyles = () => {
  const { token } = theme.useToken()

  const styles: Record<
    'appLayout' | 'headerLayout' | 'header' | 'logo' | 'menu' | 'contentLayout' | 'dropdown',
    CSSProperties
  > = {
    appLayout: {
      minHeight: '100vh',
    },
    headerLayout: {
      backgroundColor: token.colorBgBase,
      paddingLeft: 'max(16px,2%)',
      paddingRight: 'max(16px,2%)',
      height: 52,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      gap: 20,
      position: 'relative',
    },
    logo: {
      height: '40%',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    menu: {
      height: '100%',
      width: 400,
      flex: 1,
      borderBottomWidth: 0,
      justifyContent: 'center',
    },
    contentLayout: {
      paddingBlock: 32,
      paddingInline: 'max(32px, 10%)',
    },
    dropdown: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
    },
  }

  return styles
}

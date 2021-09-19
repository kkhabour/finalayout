import React from 'react'
import FinaSidebar from './components/FinaSidebar'
import FinaContent from './components/FinaContent'
import styled from 'styled-components'
import { useMediaQuery } from './hooks/hooks'
import { GREY } from './utils/colors'

const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  background-color: ${GREY};
`

const FinaLayout: React.FC = () => {
  const mobile = useMediaQuery('(max-width: 767px)')
  const laptop = useMediaQuery('(min-width: 767px) and (max-width: 992px)')
  const [collapse, setCollapse] = React.useState<boolean>(
    !mobile && !laptop ? false : true
  )

  console.log({ collapse, mobile, laptop })

  React.useEffect(() => {
    if (mobile && collapse !== mobile) setCollapse(mobile)
    else if (laptop && collapse !== laptop) setCollapse(laptop)
    else if (!mobile && !laptop && collapse !== false) setCollapse(false)
  }, [mobile, laptop])

  return (
    <Layout>
      <FinaSidebar
        collapse={collapse}
        setCollapse={setCollapse}
        isMobile={mobile}
      />
      <FinaContent
        collapse={collapse}
        setCollapse={setCollapse}
        isMobile={mobile}
      ></FinaContent>
    </Layout>
  )
}

export default FinaLayout

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import LogoSVG from "./logoSVG"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `blue`,
                backgroundImage: 'none',
              }}
              to={`/`}
            >
              <LogoSVG />
            </Link>
          </header>
          <main>{children}</main>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout

import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import styled from "styled-components"

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`

const IndexPage = () => {
  return (
    <Component>
      <Link to="/page-2/">
        <StyledButton> New Request </StyledButton>
      </Link>
    </Component>
  )
}

export default IndexPage

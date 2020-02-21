/**
 * Top Bar JS
 * 
 **/

import React from 'react'
import styled from 'styled-components'

class TopBar extends React.Component {

    render() {
        return(
            <div className="edx-app__topbar">
                <Wrapper>
                    <ul>
                        <li>
                            <a href="/">Eduxa</a>
                            <a href="/">Tentang Kami</a>
                        </li>
                    </ul>
                </Wrapper>
            </div>
        )
    }

}

const Wrapper = styled.nav`
    -webkit-box-shadow: 0 0 1px rgba(67,90,111,.47), 0 2px 4px -2px rgba(67,90,111,.3);
    box-shadow: 0 0 1px rgba(67,90,111,.47), 0 2px 4px -2px rgba(67,90,111,.3);
    height: 50px;
`

export default TopBar
import React from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';
import './Header.css'

export default function Header(){
    return(
        <React.Fragment>
            <Menu borderless className="menucontainer">
                <MenuItem className="menuitem">
                  <p>Star Wars fanclub</p>
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}
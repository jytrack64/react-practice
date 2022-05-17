// import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext';

// class ThemedButton extends Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;

//     return (
//       <div>
//         <button {...props}
//         onClick={props.changeTheme}
//         style={{background: theme.background, color: theme.foreground}}>button</button>
//       </div>
//     )
//   }
// }

// ThemedButton.contextType = ThemeContext;
// export default ThemedButton;

import React, { useContext } from 'react'

export default function ThemedButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <button {...props}
    onClick={props.changeTheme}
    style={{background: theme.background, color: theme.foreground}}>button</button>
  )
}

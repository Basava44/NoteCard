import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#fefefe'
//     },
//     secondary: purple
//   },
//   typography: {
//     fontFamily: 'Quicksand',                 TO Change the Theme of Material UI
//     fontWeightLight: 400,
//     fontWeightRegular: 500,              
//     fontWeightMedium: 600,
//     fontWeightBold: 700,
//   }
// })

function App() {
  return (
    
      <Router>
        <Layout>
          <Switch>
            <Route path="/NoteCard">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    
  );
}

export default App;

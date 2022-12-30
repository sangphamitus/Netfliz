import React from 'react'
import { Button, Input, Text, NavBar, Footer } from '../components'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from 'react-router-dom'

function ManageAdminPage() {
  const [textInput, setTextInput] = React.useState('')
  const [users, setUsers] = React.useState([])
  const [changePermission, setChangePermission] = React.useState([])
  const [typeUser, setTypeUser] = React.useState({ username: '', password: '' })

  // TODO: change to accounts search
  const submit = async (e) => {
    if (textInput.length > 0) {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}videos/search`, {
          name: textInput,
        })
        .then((res) => {
          console.log(res.data.data)
          setUsers(res.data.data)
        })
    } else {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}videos/getall`)
        .then((res) => {
          console.log(res.data.data)
          setUsers(res.data.data)
        })
    }
    setTextInput('')
  }
  React.useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}users/getUser`, {
        uid: localStorage.getItem('uid'),
      })
      .then((res) => {
        console.log(res.data.data)
        setUsers(res.data.data)
      })
  }, [])

  const handleChange = (uid, per) => {
    let index = changePermission.findIndex((element) => element.uid === uid)
    if (index === -1) {
      setChangePermission([...changePermission, { uid, permission: !per }])
    } else {
      var array = changePermission
      array.splice(index, 1)
      setChangePermission([...array])
    }
  }
  const saveSubmit = async (e) => {
    if (typeUser.password.length === 0 || typeUser.username.length === 0) {
      toast.error('Please input username or password', {
        autoClose: 2000,
        position: 'bottom-left',
      })
    } else {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}users/changePermission`, {
          changePermission,
          username: typeUser.username,
          password: typeUser.password,
        })
        .then((res) => {
          setTypeUser({ username: '', password: '' })
          if (res.data.message === 'success') {
            setUsers(res.data.data)
            toast.success('Change permission successfully', {
              autoClose: 2000,
              position: 'bottom-left',
            })
            setChangePermission([])
          } else {
            toast.error('There was an error, please try again', {
              autoClose: 2000,
              position: 'bottom-left',
            })
          }
        })
    }
  }
  return (
    <div className="App h-screen bg-[#082032]">
      <NavBar />
      <Text
        text="CHANGE MOVIE INFO"
        isHeader={true}
        customTheme="text-pink-600 text-[30px] font-button ml-[50px] mt-[50px]"
      />

      <form
        onSubmit={submit}
        // method="post"
        // action="/videos/search"
        className="flex mr-10 max-w-screen-md w-full ml-auto"
      >
        <Input
          inputTheme="p-4 h-10 max-2w-xl w-auto bg-black bg-opacity-25"
          placeholder="Input movie name or category"
          containerTheme="pt-2 mb-2 w-full bg-opacity-25"
          textColor="white"
          name="name"
          onChange={(e) => setTextInput(e.target.value)}
        />
        <Button
          className="nav-toggle"
          type="submit"
          onClick={submit}
          theme="w-14 rounded-full ml-0"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} inverse size="2x" />
        </Button>
      </form>

      <table className="table w-3/4 mx-64 my-10">
        <thead>
          <th>ID</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>ISADMIN</th>
        </thead>
        <tbody>
          {/* Use map here ? */}
          {users.map((each) => (
            <tr>
              <td>{each.uid}</td>
              <td>{each.username}</td>
              <td>{each.email}</td>
              <td>
                <input
                  type="checkbox"
                  checked={
                    changePermission.findIndex(
                      (item) => item.uid === each.uid,
                    ) === -1
                      ? each.permission
                      : !each.permission
                  }
                  onChange={(e) => {
                    handleChange(each.uid, each.permission)
                  }}
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {changePermission.length > 0 && (
        <div>
          <Input
            inputTheme="p-4 h-10 max-2w-xl w-auto bg-black bg-opacity-25"
            placeholder="Input movie name or category"
            containerTheme="pt-2 mb-2 w-full bg-opacity-25"
            textColor="white"
            name="username"
            required
            labelText={'username'}
            text={typeUser.username}
            onChange={(e) => {
              setTypeUser({ ...typeUser, username: e.target.value })
            }}
          />

          <Input
            inputTheme="p-4 h-10 max-2w-xl w-auto bg-black bg-opacity-25"
            placeholder="Input movie name or category"
            containerTheme="pt-2 mb-2 w-full bg-opacity-25"
            textColor="white"
            name="username"
            type="password"
            labelText={'password'}
            required
            text={typeUser.password}
            onChange={(e) => {
              setTypeUser({ ...typeUser, password: e.target.value })
            }}
          />
          <div className="flex py-20 justify-evenly">
            <Button
              theme="bg-pink-600 rounded-[5px] w-28 h-10"
              onClick={(e) => saveSubmit(e)}
            >
              <Text
                text="SAVE"
                customTheme="text-white font-button text-[25px]"
              />
            </Button>
            <Button
              theme="bg-pink-600 rounded-[5px] w-28 h-10"
              onClick={(e) => Navigate('/admin')}
            >
              <Text
                text="BACK"
                customTheme="text-white font-button text-[25px]"
              />
            </Button>
          </div>
        </div>
      )}

      <Footer />
      <ToastContainer />
    </div>
  )
}
export default {
  routeProps: {
    path: '/addadmin',
    main: ManageAdminPage,
  },
}

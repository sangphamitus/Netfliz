import React, { useEffect, useState } from 'react'
import {
  Button,
  Input,
  Text,
  NavBar,
  Footer,
  Card,
  ListMovies,
} from '../components'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function AdminDeleteMovie() {
  const navigate = useNavigate()
  const [textInput, setTextInput] = React.useState('')
  const [showLinks, setShowLinks] = React.useState(false)
  const [movies, setMovies] = React.useState([])
  const submit = async (e) => {
    if (textInput.length > 0) {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}videos/search`, {
          name: textInput,
        })
        .then((res) => {
          console.log(res.data.data)
          setMovies(res.data.data)
        })
    } else {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}videos/getall`)
        .then((res) => {
          console.log(res.data.data)
          setMovies(res.data.data)
        })
    }
    setTextInput('')
  }
  React.useEffect(() => {
    if (localStorage.getItem('per') !== 'true') {
      window.location.href = '/'
    } else {
      try {
        let value = decodeURI(window.location.search).split('?')[1].split('=')
        axios
          .post(`${process.env.REACT_APP_ENDPOINT}videos/search`, {
            name: value[1].replace('+', ' '),
          })
          .then((res) => {
            console.log(res.data.data)
            setMovies(res.data.data)
          })
      } catch (err) {
        axios
          .post(`${process.env.REACT_APP_ENDPOINT}videos/getall`)
          .then((res) => {
            console.log(res.data.data)
            setMovies(res.data.data)
          })
      }
    }
  }, [])

  const deleteMovie = async (vid) => {
    if (vid) {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}videos/deleteVideo`, {
          vid: vid,
        })
        .then((res) => {
          if (res.data.message === true) {
            toast.success(`Delete ${vid} successfully`, {
              autoClose: 2000,
              position: 'bottom-left',
            })
          } else {
            toast.error(`Delete ${vid} failed`, {
              autoClose: 2000,
              position: 'bottom-left',
            })
          }
        })
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}videos/getall`)
        .then((res) => {
          console.log(res.data.data)
          setMovies(res.data.data)
        })
    }
  }
  return (
    <div className="App bg-[#082032]">
      <NavBar is_login={true} allowSearch={false} />
      <div className="mx-36 py-14 h-auto">
        <Text
          text={'ALL MOVIE'}
          isHeader={true}
          customTheme={'text-pink-600 font-button text-4xl '}
        />
        <form
          onSubmit={submit}
          // method="post"
          // action="/videos/search"
          className="flex mr-10 max-w-screen-md w-full ml-auto"
        >
          <Input
            inputTheme={'p-4 h-10 max-2w-xl w-auto bg-black bg-opacity-25'}
            placeholder={'Input movie name or category'}
            containerTheme={'pt-2 mb-2 w-full bg-opacity-25'}
            textColor={'white'}
            name="name"
            onChange={(e) => setTextInput(e.target.value)}
          ></Input>
          <Button
            className="nav-toggle"
            type="submit"
            onClick={submit}
            theme="w-14 rounded-full ml-0"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} inverse size="2x" />
          </Button>
        </form>
        <div className="grid items-center justify-between grid-cols-3 grid-rows-4 my-5"></div>
      </div>
      <div className="grid items-center justify-between grid-cols-3 my-5">
        {movies.length > 0 &&
          movies.map((each, i) => {
            return (
              <Card
                key={i}
                imgSrc={each.image}
                vid={each.vid}
                canEdit={true}
                onTrashClick={(e) => {
                  deleteMovie(each.vid)
                }}
                className={'max-w-xs mt-8'}
              />
            )
          })}
      </div>
      <div>{/* chố này để cái chuyển trang*/}</div>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default {
  routeProps: {
    path: '/deletemovie',
    main: AdminDeleteMovie,
  },
}

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeartCircleMinus,
  faHeartCirclePlus,
  faPlay,
} from '@fortawesome/free-solid-svg-icons'

import {
  Button,
  Input,
  Text,
  NavBar,
  Footer,
  Rate,
  Comment,
} from '../components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MovieInfoPage() {
  const [movie, setMovie] = React.useState({})
  const [cmt, setCmt] = React.useState([])
  const [info, setInfo] = React.useState({ listMovie: [] })
  const [inputCmt, setInputCmt] = React.useState('')
  const [added, setAdded] = React.useState(false)
  const search = useLocation().search
  const navigate = useNavigate()
  const watchingAccessing = () => {
    navigate(`/watch?vid=${new URLSearchParams(search).get('vid')}`)
  }
  const vid = new URLSearchParams(search).get('vid')

  React.useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}videos/get`, {
        vid: vid,
      })
      .then((res) => {
        setMovie(res.data.data)
        console.log(res.data.data)
      })

    axios
      .post(`${process.env.REACT_APP_ENDPOINT}comments/getpost`, {
        vid: vid,
      })
      .then((res) => {
        setCmt(res.data.data)
      })
  }, [vid])

  React.useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}userinfo/get`, {
        uid: localStorage.getItem('uid'),
      })
      .then((res) => {
        setInfo(res.data.data)
      })
  }, [added])

  const postComment = async () => {
    if (inputCmt !== '') {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT}comments/post`, {
          vid: vid,

          uid: localStorage.getItem('uid'),
          content: inputCmt,
        })
        .then((res) => {
          setCmt(res.data.data)
          setInputCmt('')
        })
    }
  }

  const postAddList = async () => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}userinfo/addMovie`, {
        vid: vid,
        uid: localStorage.getItem('uid'),
        img: movie.image,
      })
      .then((res) => {
        if (res.data.messages === 'success') {
          setAdded(true)
          toast.success('Add successfully to your movie list', {
            autoClose: 2000,
            position: 'bottom-left',
          })
        } else {
          toast.error('Add fail, please try again', {
            autoClose: 2000,
            position: 'bottom-left',
          })
        }
      })
  }

  const rmMovie = async () => {
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}userinfo/rmMovie`, {
        uid: localStorage.getItem('uid'),
        vid: vid,
      })
      .then((res) => {
        if (res.data.messages === 'success') {
          setInfo(res.data.data)
          setAdded(false)
          toast.success('Removed successfully', {
            autoClose: 2000,
            position: 'bottom-left',
          })
        } else {
          toast.error('Please try again', {
            autoClose: 2000,
            position: 'bottom-left',
          })
        }
      })
    //window.location.href="/profile"
  }
  return (
    <div className="App bg-[#082032] pt-0">
      <NavBar />
      <div className="relative">
        <img
          className="w-full h-auto max-h-[59rem] z-0"
          src={process.env.REACT_APP_ENDPOINT + movie.image}
          title={movie.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></img>
        <div className="absolute bottom-0 sm:pl-9 pl-2">
          <Text
            text={movie.name}
            isHeader={true}
            customTheme="text-white sm:pb-44"
            style={{
              fontSize: 'calc(1rem + 2.5vw)',
            }}
          />
          {localStorage.getItem('uid') !== null &&
            localStorage.getItem('uid') !== 'null' && (
              <div className="sm:mb-10 mb-4 flex flex-row">
                <Button
                  theme={
                    'bg-white w-auto h-auto sm:mx-3 px-4 flex items-center'
                  }
                  onClick={(e) => {
                    watchingAccessing()
                  }}
                >
                  <FontAwesomeIcon icon={faPlay} className="pb-1" />
                  <Text
                    customTheme="sm:text-[2rem] text-xl leading-none text-black font-button"
                    isHeader={false}
                    text="Watch"
                  />
                </Button>
                {info.listMovie.filter((item) => item.vid === vid).length ===
                0 ? (
                  <Button
                    theme={'bg-white w-auto h-auto mx-3 px-4 flex items-center'}
                    onClick={postAddList}
                  >
                    <FontAwesomeIcon
                      icon={faHeartCirclePlus}
                      className="pb-1"
                    />
                    <Text
                      customTheme="sm:text-[2rem] text-xl leading-none text-black font-button"
                      isHeader={false}
                      text="List"
                    />
                  </Button>
                ) : (
                  <Button
                    theme={'bg-white w-auto h-auto mx-3 px-4 flex items-center'}
                    onClick={rmMovie}
                  >
                    <FontAwesomeIcon
                      icon={faHeartCircleMinus}
                      className="pb-1"
                    />
                    <Text
                      customTheme="sm:text-[2rem] text-xl leading-none text-black font-button"
                      isHeader={false}
                      text="Remove"
                    />
                  </Button>
                )}
              </div>
            )}
        </div>
      </div>

      <div className="w-full px-7 pt-5">
        <Rate rateinput={movie.ratting} />
        <p className="text-white font-normal h-full max-h-44 overflow-y-auto">
          {movie.review}
        </p>
      </div>

      <div className="bg-[#2D2F3D] min-h-[18rem] h-full my-10 mx-5 pb-3">
        <Text
          text="Comments"
          customTheme="text-[2rem] px-5 text-white"
          isHeader={true}
        />
        {localStorage.getItem('uid') !== null &&
          localStorage.getItem('uid') !== 'null' && (
            <form
              className="flex flex-row max-sm:flex-col max-sm:items-center max-sm:space-y-3 px-5 my-5"
              onSubmit={postComment}
            >
              <Input
                containerTheme="w-full min-w-[0px] h-10"
                inputTheme="h-full"
                value={inputCmt}
                onChange={(e) => {
                  setInputCmt(e.target.value)
                }}
              />
              <Button
                theme="bg-pink-600 rounded-2xl w-auto h-auto px-3 mx-3 px-4 max-sm:w-fit"
                type="submit"
                onClick={postComment}
              >
                <Text
                  customTheme="text-[2rem] leading-none text-gray-200 font-button"
                  isHeader={false}
                  text="Comment"
                />
              </Button>
            </form>
          )}

        <div className="my-5">
          {cmt.map((item) => {
            return <Comment key={item.key} item={item} />
          })}
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default {
  routeProps: {
    path: '/info',
    main: MovieInfoPage,
  },
}

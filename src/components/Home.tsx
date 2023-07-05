import ThreeD from './3d/ThreeDImage'
import Footer from './Footer'
import './home.css'
// import ImgSlider from './slider/ImgSlider'

const Home = () => {
  const handleSearch = (searchTerm: string) => {
    console.log('Search term:', searchTerm)
  }

  return (
    <>
        <div className="main-box">
          <div className='plan-box'>
          <h1>What next ... ?</h1>
          <h2>What to eat and play.</h2>
          {/* <ImgSlider /> */}
          {/* <ThreeD /> */}
          <div className="gallery-container">
          <div className="gallery">
            <a
              target="_blank"
              href="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            >
              <img
                src="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Thailand"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Thailand</div>
          </div>

          <div className="gallery">
            <a
              target="_blank"
              href="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            >
              <img
                src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Japan"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Japan</div>
          </div>

          <div className="gallery">
            <a
              target="_blank"
              href="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJhbGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
            >
              <img
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJhbGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
                alt="Australia"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">Australia</div>
          </div>

          <div className="gallery">
            <a
              target="_blank"
              href="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
            >
              <img
                src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
                alt="New Zealand"
                width="600"
                height="400"
              />
            </a>
            <div className="desc">New Zealand</div>
          </div>
          </div>
        </div>
        </div>
       
    </>
  )
}

export default Home

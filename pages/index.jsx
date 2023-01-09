import Link from "next/link";


const Home = () => {
  return (  
    <div>

      <div className="col-md-10 m-auto">
        <div className="row">
          <div className="col-md-6">
            <h1>Cohorts</h1>
            <p>Our workshop kit offers a range of exercises you can run with your team to put the Guidebook’s design patterns into practice in your product.</p>
          </div>
        </div>
      </div>

      <div className="col-md-10 m-auto">

        <div className="row">
          <div className="col-md-4">
            <h2>Get Started</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nihil quia a culpa!</p>
            <p>To get started, you’ll need: </p>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>

          <div className="col-md-8">

            <div className="card">
              <div class="row g-0">
                <div class="col-md-7">
                  <div className="card-body">
                    <p><small  className="bg-success p-2 text-white rounded">Upcoming...</small></p>
                    <h2 className="card-title">Git and GitHub basics</h2>
                    <p className="card-text">Git is a free and open-source version control system, originally created by Linus Torvalds in 2005. </p>
                    <ul>
                      <li>Live session</li>
                      <li>QnA</li>
                      <li>Private community</li>
                    </ul>
                    <a href="#" className="btn btn-primary">Get Early Access</a>
                  </div>
                </div>

                <div class="col-md-4 m-4">
                  <img src="https://pair.withgoogle.com/guidebook/images/ui-elements/workshop-top.jpg" class="img-fluid rounded-start" alt="..." />
                </div>
              </div>
            </div>

       
          </div>



        </div>

      </div>

    </div>
  );
}
 
export default Home;
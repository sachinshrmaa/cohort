
import Script from "next/script";
import styles from './page.module.css'

const Test = () => {
    return (  
        <div className={styles.testimonialSection}>

            <h2 className="subHeading text-center">Wall Of Love</h2>

            <div id="carouselExampleIndicators" class="carousel slide">

                <div class="carousel-inner">

                    <div class="carousel-item active" data-bs-interval="10000">
                        <div className="row col-9 m-auto">
                            <div className="col-4">
                                <blockquote className="twitter-tweet">
                                    <p lang="en" dir="ltr">This guy has the aura of teaching any individual with making the topic interesting itself just like teaching JavaScript to a newbie... <a href="https://twitter.com/SachinShrmaa?ref_src=twsrc%5Etfw">@SachinShrmaa</a> ...keep it up brother🤘🤘🤘</p>&mdash; Saheb Kumar Singh (@imbatmanB2) <a href="https://twitter.com/imbatmanB2/status/1631253871527096321?ref_src=twsrc%5Etfw">March 2, 2023</a>
                                </blockquote>
                            </div>
                            <div className="col-4">
                                <blockquote class="twitter-tweet">
                                    <p lang="en" dir="ltr">I really like to read his newsletter,<br/>he always comes up with new and interesting topics.<a href="https://twitter.com/SachinShrmaa?ref_src=twsrc%5Etfw">@SachinShrmaa</a> <br/>I&#39;d love to see you do more of this.<br/>I definitely recommend it.<br/>Join:<a href='https://t.co/QM7SYKs5tq'>https://t.co/QM7SYKs5tq</a></p>&mdash; Art and Soul (@jyotssart) <a href="https://twitter.com/jyotssart/status/1283407536624857089?ref_src=twsrc%5Etfw">July 15, 2020</a>
                                </blockquote>
                            </div>
                            <div className="col-4">
                                <blockquote className="twitter-tweet">
                                    <p lang="en" dir="ltr">This guy has the aura of teaching any individual with making the topic interesting itself just like teaching JavaScript to a newbie... <a href="https://twitter.com/SachinShrmaa?ref_src=twsrc%5Etfw">@SachinShrmaa</a> ...keep it up brother🤘🤘🤘</p>&mdash; Saheb Kumar Singh (@imbatmanB2) <a href="https://twitter.com/imbatmanB2/status/1631253871527096321?ref_src=twsrc%5Etfw">March 2, 2023</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className="row col-9 m-auto">
                            <div className="col-4">
                                <blockquote className="twitter-tweet">
                                    <p lang="en" dir="ltr">This guy has the aura of teaching any individual with making the topic interesting itself just like teaching JavaScript to a newbie... <a href="https://twitter.com/SachinShrmaa?ref_src=twsrc%5Etfw">@SachinShrmaa</a> ...keep it up brother🤘🤘🤘</p>&mdash; Saheb Kumar Singh (@imbatmanB2) <a href="https://twitter.com/imbatmanB2/status/1631253871527096321?ref_src=twsrc%5Etfw">March 2, 2023</a>
                                </blockquote>
                            </div>
                            <div className="col-4">
                                <blockquote className="twitter-tweet">
                                    <p lang="en" dir="ltr">This guy has the aura of teaching any individual with making the topic interesting itself just like teaching JavaScript to a newbie... <a href="https://twitter.com/SachinShrmaa?ref_src=twsrc%5Etfw">@SachinShrmaa</a> ...keep it up brother🤘🤘🤘</p>&mdash; Saheb Kumar Singh (@imbatmanB2) <a href="https://twitter.com/imbatmanB2/status/1631253871527096321?ref_src=twsrc%5Etfw">March 2, 2023</a>
                                </blockquote>
                            </div>
                            <div className="col-4">
                                <blockquote className="twitter-tweet">
                                    <p lang="en" dir="ltr">This guy has the aura of teaching any individual with making the topic interesting itself just like teaching JavaScript to a newbie... <a href="https://twitter.com/SachinShrmaa?ref_src=twsrc%5Etfw">@SachinShrmaa</a> ...keep it up brother🤘🤘🤘</p>&mdash; Saheb Kumar Singh (@imbatmanB2) <a href="https://twitter.com/imbatmanB2/status/1631253871527096321?ref_src=twsrc%5Etfw">March 2, 2023</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
            <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
        </div>
    );
}
 
export default Test;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './LandingPage.css';
import Auth from './Login'


const LandingPage = () => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://raw.githubusercontent.com/sarathsaleem/grained/master/grained.min.js";
        script.async = true;
        document.body.appendChild(script);
        // script.onload = () => {
        //     grained('main')
        // }
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    if (typeof document !== `undefined`) {
        document.addEventListener("mousemove", parallax);
        document.addEventListener("mouseleave", restore);
        function parallax(e) {
            this.querySelectorAll(".landing-img").forEach((layer) => {
            var speed = layer.getAttribute("data-speed");
            var x = (window.innerWidth - e.pageX * speed) / 100;
            var y = (window.innerHeight - e.pageY * speed) / 100;
            //console.log(x, y)

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }
        function restore() {
            this.querySelectorAll(".landing-img").forEach((layer) => {
            layer.transition = "transform 0.6s ease-in-out";
            layer.style.transform = `translateX(0px) translateY(0px)`;
            });
        }
    }
    
    return(
        <>
            <main>
                <img className="landing-img one" data-speed="8" src="https://images.unsplash.com/photo-1700591698073-833f3dc7127f?q=80&w=3448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <img className="landing-img two" data-speed="2" src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <img className="landing-img three" data-speed="-4" src="https://images.unsplash.com/photo-1682687981674-0927add86f2b?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <img className="landing-img four" data-speed="2" src="https://i.ibb.co/1T1Pscm/photo-1603101947606-df77d33c000e-copy.png"></img>
                <img className="landing-img five" data-speed="4" src="https://images.unsplash.com/photo-1597624543234-d14e45b22112?q=80&w=2505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <div className="auth-con">
                    <Auth />
                </div>
                <h1 className="slogan">Sharable collections <br />for your digital snapshots.</h1>
                <canvas></canvas>
            </main>
        </>
    )


}






export default LandingPage
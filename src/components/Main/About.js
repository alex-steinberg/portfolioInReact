import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <section className="mw7-ns mw6-m mw5 lh-copy center">
                <h2>About me</h2>
                <p>A Javascript Developer with a passion for building great products that people <em>want</em> to use.</p>
                <p>Being immersed in front-end for the past 4 years has given me a high proficiency in native web languages (HTML, CSS, JavaScript), a depth into web frameworks (Angular JS, Angular 2+, Knockout) and allowed me to branch out into server &amp; database (Node JS, Mongo DB, Meteor JS), build tools (Gulp, Node JS) and mobile development (Ionic, Cordova).</p>
                <p>I started and organise a <a href="https://www.meetup.com/Deep-South-Devs/" target="_blank" rel="noopener noreferrer">local MeetUp</a> as a platform for local developers to connect, be encouraged and collaborate.</p>
                <p>I am always learning and learn best "on the job", so don't hesitate to <a href="mailto: info@alexsteinberg.co.za">contact me</a> about your next project 😀</p>
                <h2>Trade Values</h2>
                <h3>Overachieve</h3>
                <p>Exceed expectations &#8212; not through genius or exertion, but through simplifying, asking key questions and maintaining disciplined focus.</p>
                <h3>Dignity</h3>
                <p>Technology is created for, implemented by and used by <em>individuals</em>. Belief in the dignity of each individual results in great tech that is a joy to make.</p>
                <h3>Simple</h3>
                <p>Simplicity breeds <em>success</em>. There's no need to rush into a big project with features you really don't need. Keeping it <em>simple</em> gives you the greatest chance of success, and won't break your bank.</p>
            </section>
        )
    }
}

export default About;
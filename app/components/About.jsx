var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Here are the tools used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">ReactJS</a> - Javascript framework
                </li>
                <li>
                    <a href="https://openweathermap.org/" target="_blank">Open Weather Map</a> - API
                </li>
            </ul>
            <footer className="text-center">Brought to you in part by<br />The Complete React Web App Developer Course</footer>
        </div>
    )
};

module.exports = About;
var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p className="text-center">This page was made with these technologies.<br />Check them out!</p>
            <ul>
                <li>
                    <a href="https://reactjs.org/" target="_blank">ReactJS</a>
                </li>
                <li>
                    <a href="https://openweathermap.org/" target="_blank">Open Weather Map</a>
                </li>
            </ul>
        </div>
    )
};

module.exports = About;
var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out</p>
            <ol>
                <li>
                    <Link to='/?location=Wichita'>Wichita, KS</Link>
                </li>
                <li>
                    <Link to='/?location=Chicago'>Chicago, IL</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;
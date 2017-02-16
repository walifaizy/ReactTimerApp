var React = require("react");
var Clock = require("Clock");

var Countdown = React.createClass({
    render: function() {
        return (
            <div>
                <Clock totalSecond={129}></Clock>
            </div>
        );
    }
});

module.exports = Countdown;
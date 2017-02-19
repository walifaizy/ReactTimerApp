var React = require("react");
var Clock = require("Clock");
var Controls = require("Controls");

var Timer = React.createClass({
    getInitialState: function() {
        return {count: 0, countdownStatus: "stopped"};
    },
    componentDidUpdate: function(prevProp, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case "started":
                    this.handleStart();
                    break;
                case "stopped":
                    this.setState({count: 0});
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmout: function() {
      clearInterval(this.timer);
    },
   handleStart: function() {
     this.timer = setInterval(() =>{
       this.setState({
         count: this.state.count +1
       });
     },1000);
   },
    handleStatusChange: function(newTimerStatus) {
        this.setState({timerStatus: newTimerStatus});
    },
    render: function() {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count}></Clock>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}></Controls>
            </div>
        );
    }
});

module.exports = Timer;

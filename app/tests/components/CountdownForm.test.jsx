var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var CountdownForm = require("CountdownForm");

describe("CountdownForm", function() {
    it("should Exists", function() {
        expect(CountdownForm).toExist();
    });
    
    it("should call onSetCountdown when valid seconds are entered", function() {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        
        countdownForm.refs.seconds.value = "109";
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith(109);
    });
    
     it("should not call onSetCountdown when invalid seconds are entered", function() {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        
        countdownForm.refs.seconds.value = "109sd";
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    });
});/********  Main describe function ********/
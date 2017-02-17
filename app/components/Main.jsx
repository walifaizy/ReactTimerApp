var React = require("react");
var Navigation = require("Navigation");


var Main = (props) => {
    return (
        <div>
           <Navigation></Navigation>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    <p>Main.jsx rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
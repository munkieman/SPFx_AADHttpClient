var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './SpFxAadHttpClient.module.scss';
var SpFxAadHttpClient = /** @class */ (function (_super) {
    __extends(SpFxAadHttpClient, _super);
    function SpFxAadHttpClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpFxAadHttpClient.prototype.render = function () {
        return (React.createElement("div", { className: styles.spFxAadHttpClient },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "AadHttpClient Demo"))),
                React.createElement("div", { className: styles.row },
                    React.createElement("div", null,
                        React.createElement("strong", null, "Mail:")),
                    React.createElement("ul", { className: styles.list }, this.props.userItems &&
                        this.props.userItems.map(function (user) {
                            return React.createElement("li", { key: user.id, className: styles.item },
                                React.createElement("strong", null, "ID:"),
                                " ",
                                user.id,
                                React.createElement("br", null),
                                React.createElement("strong", null, "Email:"),
                                " ",
                                user.mail,
                                React.createElement("br", null),
                                React.createElement("strong", null, "DisplayName:"),
                                " ",
                                user.displayName);
                        }))))));
    };
    return SpFxAadHttpClient;
}(React.Component));
export default SpFxAadHttpClient;
//# sourceMappingURL=SpFxAadHttpClient.js.map
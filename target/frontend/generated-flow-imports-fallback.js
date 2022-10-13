export const addCssBlock = function(block, before = false) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head[before ? 'insertBefore' : 'appendChild'](tpl.content, document.head.firstChild);
};
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-list/iron-list.js';
import '@vaadin/accordion/theme/lumo/vaadin-accordion.js';
import '@vaadin/app-layout/theme/lumo/vaadin-app-layout.js';
import '@vaadin/app-layout/theme/lumo/vaadin-drawer-toggle.js';
import '@vaadin/avatar-group/theme/lumo/vaadin-avatar-group.js';
import '@vaadin/avatar/theme/lumo/vaadin-avatar.js';
import '@vaadin/checkbox-group/theme/lumo/vaadin-checkbox-group.js';
import '@vaadin/confirm-dialog/theme/lumo/vaadin-confirm-dialog.js';
import '@vaadin/custom-field/theme/lumo/vaadin-custom-field.js';
import '@vaadin/date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/date-time-picker/theme/lumo/vaadin-date-time-picker.js';
import '@vaadin/details/theme/lumo/vaadin-details.js';
import '@vaadin/dialog/theme/lumo/vaadin-dialog.js';
import '@vaadin/field-highlighter/theme/lumo/vaadin-field-highlighter.js';
import '@vaadin/flow-frontend/confirmDialogConnector.js';
import '@vaadin/flow-frontend/cookieConsentConnector.js';
import '@vaadin/flow-frontend/datepickerConnector.js';
import '@vaadin/flow-frontend/dialogConnector.js';
import '@vaadin/flow-frontend/gridProConnector.js';
import '@vaadin/flow-frontend/ironListConnector.js';
import '@vaadin/flow-frontend/ironListStyles.js';
import '@vaadin/flow-frontend/loginOverlayConnector.js';
import '@vaadin/flow-frontend/menubarConnector.js';
import '@vaadin/flow-frontend/messageListConnector.js';
import '@vaadin/flow-frontend/notificationConnector.js';
import '@vaadin/flow-frontend/selectConnector.js';
import '@vaadin/flow-frontend/vaadin-big-decimal-field.js';
import '@vaadin/flow-frontend/vaadin-map/mapConnector.js';
import '@vaadin/flow-frontend/vaadin-time-picker/timepickerConnector.js';
import '@vaadin/flow-frontend/virtualListConnector.js';
import '@vaadin/grid/theme/lumo/vaadin-grid-tree-toggle.js';
import '@vaadin/icon/vaadin-icon.js';
import '@vaadin/icons/vaadin-iconset.js';
import '@vaadin/integer-field/theme/lumo/vaadin-integer-field.js';
import '@vaadin/item/theme/lumo/vaadin-item.js';
import '@vaadin/list-box/theme/lumo/vaadin-list-box.js';
import '@vaadin/login/theme/lumo/vaadin-login-form.js';
import '@vaadin/login/theme/lumo/vaadin-login-overlay.js';
import '@vaadin/menu-bar/theme/lumo/vaadin-menu-bar.js';
import '@vaadin/message-input/theme/lumo/vaadin-message-input.js';
import '@vaadin/message-list/theme/lumo/vaadin-message-list.js';
import '@vaadin/multi-select-combo-box/theme/lumo/vaadin-multi-select-combo-box.js';
import '@vaadin/notification/theme/lumo/vaadin-notification.js';
import '@vaadin/number-field/theme/lumo/vaadin-number-field.js';
import '@vaadin/password-field/theme/lumo/vaadin-password-field.js';
import '@vaadin/progress-bar/theme/lumo/vaadin-progress-bar.js';
import '@vaadin/radio-group/theme/lumo/vaadin-radio-button.js';
import '@vaadin/radio-group/theme/lumo/vaadin-radio-group.js';
import '@vaadin/scroller/vaadin-scroller.js';
import '@vaadin/select/theme/lumo/vaadin-select.js';
import '@vaadin/split-layout/theme/lumo/vaadin-split-layout.js';
import '@vaadin/tabs/theme/lumo/vaadin-tab.js';
import '@vaadin/tabs/theme/lumo/vaadin-tabs.js';
import '@vaadin/text-area/theme/lumo/vaadin-text-area.js';
import '@vaadin/time-picker/theme/lumo/vaadin-time-picker.js';
import '@vaadin/upload/src/vaadin-upload-file.js';
import '@vaadin/upload/theme/lumo/vaadin-upload.js';
import '@vaadin/virtual-list/vaadin-virtual-list.js';
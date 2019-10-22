import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'use-onclickoutside';
import { injectIntl } from 'react-intl';
import './consoleCredentialAccess.scss';
import { Icon } from 'commoncomponents/Icon';
import { CopyToClipBoard } from '../../../../../misc/utils';

const ConsoleCredentialModal = ({ setSessionDetModal, detailData, intl }) => {
  const wrapperRef = useRef(null);

  useOnClickOutside(wrapperRef, () => {
    setSessionDetModal({ modalType: '', modalData: null });
  });

  const accountvar = 'Account';
  const consolevar = detailData.entitlementName === 'RDS' ? 'Access AWS Console' : 'OK';
  const title = 'Credentials Access';

  return (
    <div className="console-cred-container">
      <div className="modal-backdrop fade show" />
      <div
        className="modal fade show"
        id="confirmModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content confirm-modal" ref={wrapperRef}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setSessionDetModal({ modalType: '', modalData: null })}
              >
                <span aria-hidden="true">
                  <i className="la la-close close-icon" />
                </span>
              </button>
            </div>
            <div className="modal-body cred-subtitle">
              <p>
                {intl.formatMessage({
                  id: 'ConsoleCredentialSubTitle1',
                })}{' '}
                <b> {detailData.privilegeId} </b> {`for ${accountvar}`}{' '}
                <b>{detailData.accountId}</b>{' '}
                {intl.formatMessage({
                  id: 'ConsoleCredentialSubTitle2',
                })}
              </p>
              <div className="console-body">
                <div className="col-12 col-sm-12 col-lg-12 left-panel">
                  <div className="left-panel-text">{accountvar}</div>
                  <div
                    style={{
                      display: 'flex',
                      alignContent: 'flex-start',
                    }}
                  >
                    <input
                      className="left-panel-text bgcolor left-panel-text-input"
                      style={{ marginLeft: 12 }}
                      id="consoleAccountCopy"
                      value={detailData.accountId}
                    />

                    <div
                      role="button"
                      tabIndex={0}
                      onFocus={() => {
                        CopyToClipBoard('consoleAccountCopy');
                      }}
                      onKeyPress={() => {
                        CopyToClipBoard('consoleAccountCopy');
                      }}
                      onClick={() => {
                        CopyToClipBoard('consoleAccountCopy');
                      }}
                    >
                      <i className="la la-copy icon-padding" />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-12 left-panel">
                  <div className="left-panel-text">
                    {' '}
                    {intl.formatMessage({
                      id: 'UserName',
                    })}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignContent: 'flex-start',
                    }}
                  >
                    <input
                      className="left-panel-text bgcolor left-panel-text-input"
                      id="consoleUserCopy"
                      value={detailData.userName}
                    />

                    <div
                      role="button"
                      tabIndex={0}
                      onFocus={() => {
                        CopyToClipBoard('consoleAccountCopy');
                      }}
                      onKeyPress={() => {
                        CopyToClipBoard('consoleAccountCopy');
                      }}
                      onClick={() => {
                        CopyToClipBoard('consoleUserCopy');
                      }}
                    >
                      <i className="la la-copy icon-padding" />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-12 left-panel">
                  <div className="left-panel-text">
                    {' '}
                    {intl.formatMessage({
                      id: 'Password',
                    })}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignContent: 'flex-start',
                    }}
                  >
                    <div className="d-flex left-panel-text bgcolor">
                      <input
                        className="password-bgcolor left-panel-text-input"
                        type="password"
                        id="consolePassCopy"
                        value={detailData.password}
                      />
                      <div
                        onClick={() => {
                          const x = document.getElementById('consolePassCopy');
                          x.type = 'text';

                          setTimeout(() => {
                            x.type = 'password';
                          }, 4000);
                        }}
                        role="button"
                        tabIndex={0}
                        onFocus={() => {
                          CopyToClipBoard('consoleAccountCopy');
                        }}
                        onKeyPress={() => {
                          CopyToClipBoard('consoleAccountCopy');
                        }}
                      >
                        <Icon name="passwordview" />
                      </div>
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      onFocus={() => {
                        CopyToClipBoard('consolePassCopy');
                      }}
                      onKeyPress={() => {
                        CopyToClipBoard('consolePassCopy');
                      }}
                      onClick={() => {
                        CopyToClipBoard('consolePassCopy');
                      }}
                    >
                      <i className="la la-copy icon-padding" />
                    </div>
                  </div>
                </div>
                {true ? null : (
                  <div className="col-12 col-sm-12 col-lg-12 left-panel">
                    <div className="left-panel-text">
                      {' '}
                      {intl.formatMessage({
                        id: 'AccessKey1',
                      })}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignContent: 'flex-start',
                      }}
                    >
                      <input
                        className="left-panel-text bgcolor left-panel-text-input"
                        id="consoleaccesskey1"
                        value={detailData.accessKey1}
                      />

                      <div
                        role="button"
                        tabIndex={0}
                        onFocus={() => {
                          CopyToClipBoard('consoleaccesskey1');
                        }}
                        onKeyPress={() => {
                          CopyToClipBoard('consoleaccesskey1');
                        }}
                        onClick={() => {
                          CopyToClipBoard('consoleaccesskey1');
                        }}
                      >
                        <i className="la la-copy icon-padding" />
                      </div>
                    </div>
                  </div>
                )}
                {true ? null : (
                  <div className="col-12 col-sm-12 col-lg-12 left-panel">
                    <div className="left-panel-text">
                      {' '}
                      {intl.formatMessage({
                        id: 'AccessKey2',
                      })}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignContent: 'flex-start',
                      }}
                    >
                      <input
                        className="left-panel-text bgcolor left-panel-text-input"
                        id="consoleaccesskey2"
                        value={detailData.accessKey2}
                      />

                      <div
                        role="button"
                        tabIndex={0}
                        onFocus={() => {
                          CopyToClipBoard('consoleaccesskey2');
                        }}
                        onKeyPress={() => {
                          CopyToClipBoard('consoleaccesskey2');
                        }}
                        onClick={() => {
                          CopyToClipBoard('consoleaccesskey2');
                        }}
                      >
                        <i className="la la-copy icon-padding" />
                      </div>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  className="btn btn-primary launch-button"
                  onClick={() => setSessionDetModal({ modalType: '', modalData: null })}
                >
                  {consolevar}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ConsoleCredentialModal.propTypes = {
  intl: PropTypes.arrayOf(
    PropTypes.shape({
      locale: PropTypes.string.isRequired,
      formatMessage: PropTypes.func.isRequired,
    })
  ).isRequired,
  setSessionDetModal: PropTypes.func.isRequired,
  detailData: PropTypes.shape({
    PAMType: PropTypes.string,
    requestId: PropTypes.string,
    accessKey1: PropTypes.string,
    accessKey2: PropTypes.string,
    privilegeId: PropTypes.string,
    accountId: PropTypes.string,
    password: PropTypes.string,
    userName: PropTypes.string,
    entitlementName: PropTypes.string,
  }).isRequired,
};
export default injectIntl(ConsoleCredentialModal);

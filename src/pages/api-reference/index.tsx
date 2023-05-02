/* eslint-disable header/header */
/* eslint-disable @docusaurus/no-untranslated-text */

/**
 * Copyright (c) Coriano Harris. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useState} from 'react';
import SwaggerUI from 'swagger-ui-react';
import Layout from '@theme/Layout';
import 'swagger-ui-react/swagger-ui.css';
import config from './web-config.json';
import styles from './api-reference.module.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ApiReferencePage() {
  const [swaggerIdx, setSwaggerIdx] = useState(-1);

  return (
    <Layout>
      <div className={`container ${styles.container}`}>
        <div className="row">
          <div className="col">
            <h1>Swagger - API Documentation</h1>
            <div className={styles.selectWrapper}>
              <select
                className="form-select"
                aria-label="Select API Swagger"
                defaultValue={-1}
                onChange={(e) => setSwaggerIdx(Number(e.target.value))}>
                <option value="-1">Select API Swagger</option>
                {config.apis.map((url, idx) => (
                  <option key={idx} value={idx}>
                    {url}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={styles.breakline} />
        <div className="row">
          <div className="col">
            {swaggerIdx >= 0 ? (
              <SwaggerUI url={config.apis[swaggerIdx]} />
            ) : (
              <div className={styles.alert}>No API Selected</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ApiReferencePage;

/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Grid } from '@material-ui/core';
import {
  coreExtensionData,
  createExtensionInput,
} from '@backstage/frontend-plugin-api';
import { createEntityContentExtension } from '@backstage/plugin-catalog-react/alpha';

export const OverviewEntityContent = createEntityContentExtension({
  id: 'overview',
  defaultPath: '/',
  defaultTitle: 'Overview',
  disabled: false,
  inputs: {
    cards: createExtensionInput({
      element: coreExtensionData.reactElement,
    }),
  },
  loader: async ({ inputs }) => (
    <Grid container spacing={3} alignItems="stretch">
      {inputs.cards.map(card => (
        <Grid item md={6} xs={12}>
          {card.element}
        </Grid>
      ))}
    </Grid>
  ),
});

export default [OverviewEntityContent];
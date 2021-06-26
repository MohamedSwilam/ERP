import mock from './mock'

/* eslint-disable import/extensions */

// JWT
import './jwt'

// Apps
import './data/apps/calendar'

/* eslint-enable import/extensions */

mock.onAny().passThrough() // forwards the matched request over network

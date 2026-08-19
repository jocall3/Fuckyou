// ---// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**import {

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**import { Router, Request, Response, NextFunction } from 'express';
import { z }

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

//

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

//

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokensimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokensimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format:

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokensimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format:

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format:

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setupimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setupimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setupimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req,import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports:

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req,import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports:

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/vimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports:

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP tokenimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ?

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP tokenimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ?

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (reqimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}]

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (reqimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}]

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

//

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

//

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiringimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

//

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate,import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// =

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate,import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// =

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the userimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the userimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const Update

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const Update

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/accountimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/accountimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
routerimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
routerimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, resimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, resimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Triggerimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Triggerimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate,import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate,import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GETimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GETimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoingimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoingimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId',import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId',import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localizationimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localizationimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) =>import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) =>import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deep

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deep

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Privateimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Privateimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsights

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsights

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default routerimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default routerimport { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({


// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});



// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// =================================================================

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface Account

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanup

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 *

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanup

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: Account

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequest

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp =

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 6

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000)

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.gemini

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.geminiRequestCount += 1;
    return true;
  }

  public delete(userId: string): boolean {
    

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.geminiRequestCount += 1;
    return true;
  }

  public delete(userId: string): boolean {
    return this.store.delete(userId);
  }

  private sweepStaleSessions(): void {
    

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.geminiRequestCount += 1;
    return true;
  }

  public delete(userId: string): boolean {
    return this.store.delete(userId);
  }

  private sweepStaleSessions(): void {
    const now = Date.now();
    const staleThreshold = 2 * 60 * 60 *

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.geminiRequestCount += 1;
    return true;
  }

  public delete(userId: string): boolean {
    return this.store.delete(userId);
  }

  private sweepStaleSessions(): void {
    const now = Date.now();
    const staleThreshold = 2 * 60 * 60 * 1000; // 2 hours of inactivity
    let evictedCount = 0;

    for (const

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.geminiRequestCount += 1;
    return true;
  }

  public delete(userId: string): boolean {
    return this.store.delete(userId);
  }

  private sweepStaleSessions(): void {
    const now = Date.now();
    const staleThreshold = 2 * 60 * 60 * 1000; // 2 hours of inactivity
    let evictedCount = 0;

    for (const [userId, state] of this.store.entries()) {
      if (now - state.lastActivityTimestamp > staleThreshold

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.geminiRequestCount += 1;
    return true;
  }

  public delete(userId: string): boolean {
    return this.store.delete(userId);
  }

  private sweepStaleSessions(): void {
    const now = Date.now();
    const staleThreshold = 2 * 60 * 60 * 1000; // 2 hours of inactivity
    let evictedCount = 0;

    for (const [userId, state] of this.store.entries()) {
      if (now - state.lastActivityTimestamp > staleThreshold) {
        this.store.delete(userId);
        evictedCount++;
      }
    }

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.geminiRequestCount += 1;
    return true;
  }

  public delete(userId: string): boolean {
    return this.store.delete(userId);
  }

  private sweepStaleSessions(): void {
    const now = Date.now();
    const staleThreshold = 2 * 60 * 60 * 1000; // 2 hours of inactivity
    let evictedCount = 0;

    for (const [userId, state] of this.store.entries()) {
      if (now - state.lastActivityTimestamp > staleThreshold) {
        this.store.delete(userId);
        evictedCount++;
      }
    }

    if (evictedCount > 0) {
      logger.info(`AccountStateStore garbage collection evicted

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.geminiRequestCount += 1;
    return true;
  }

  public delete(userId: string): boolean {
    return this.store.delete(userId);
  }

  private sweepStaleSessions(): void {
    const now = Date.now();
    const staleThreshold = 2 * 60 * 60 * 1000; // 2 hours of inactivity
    let evictedCount = 0;

    for (const [userId, state] of this.store.entries()) {
      if (now - state.lastActivityTimestamp > staleThreshold) {
        this.store.delete(userId);
        evictedCount++;
      }
    }

    if (evictedCount > 0) {
      logger.info(`AccountStateStore garbage collection evicted ${evictedCount} stale sessions.`);
    }
  }
}

export const accountStateStore = new AccountStateStore

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Winston, createLogger, transports, format } from 'winston';

// ============================================================================
// SYSTEM CONFIGURATION & LOGGING INFRASTRUCTURE
// ============================================================================

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'account-routes-service', slot: 'slot-1' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, service, ...meta }) => {
          const metaStr = Object.keys(meta).length ? ` | meta: ${JSON.stringify(meta)}` : '';
          return `[${timestamp}] [${service}] ${level}: ${message}${metaStr}`;
        })
      )
    })
  ]
});

// ============================================================================
// TYPESCRIPT INTERFACES & SCHEMA DEFINITIONS (ZOD VALIDATION)
// ============================================================================

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
    tenantId?: string;
    sessionVersion?: number;
  };
  correlationId?: string;
  startTime?: number;
}

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').optional(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').optional(),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid international phone number format').optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']).default('system'),
    notificationsEnabled: z.boolean().default(true),
    aiInsightsFrequency: z.enum(['realtime', 'daily', 'weekly']).default('daily'),
    geminiPersona: z.string().max(100).optional()
  }).optional(),
  metadata: z.record(z.unknown()).optional()
});

export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;

export const AnalyzeActivitySchema = z.object({
  timeframe: z.enum(['24h', '7d', '30d', '90d', 'all']).default('7d'),
  includeGeminiDiagnostics: z.boolean().default(true),
  deepScan: z.boolean().default(false),
  customMetrics: z.array(z.string()).optional()
});

export type AnalyzeActivityDto = z.infer<typeof AnalyzeActivitySchema>;

export const AccountInsightsQuerySchema = z.object({
  category: z.enum(['security', 'productivity', 'financial', 'behavioral', 'all']).default('all'),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
  cursor: z.string().optional()
});

export type AccountInsightsQueryDto = z.infer<typeof AccountInsightsQuerySchema>;

export const DeactivateAccountSchema = z.object({
  confirmationPhrase: z.string().refine(val => val === 'DELETE MY ACCOUNT', {
    message: 'Confirmation phrase must exactly match "DELETE MY ACCOUNT"'
  }),
  reason: z.string().min(5, 'Please provide a valid reason').max(500),
  exportDataFirst: z.boolean().default(false)
});

export type DeactivateAccountDto = z.infer<typeof DeactivateAccountSchema>;

// ============================================================================
// IN-MEMORY STATE STORE & CACHING LAYER
// ============================================================================

export interface AccountSessionState {
  userId: string;
  lastActivityTimestamp: number;
  requestCount: number;
  geminiRateLimitWindowStart: number;
  geminiRequestCount: number;
  flaggedForReview: boolean;
}

class AccountStateStore {
  private store = new Map<string, AccountSessionState>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Run cleanup sweep every 15 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.sweepStaleSessions(), 15 * 60 * 1000);
    if (this.cleanupInterval.unref) {
      this.cleanupInterval.unref();
    }
  }

  public get(userId: string): AccountSessionState | undefined {
    return this.store.get(userId);
  }

  public set(userId: string, state: AccountSessionState): void {
    this.store.set(userId, state);
  }

  public touch(userId: string): AccountSessionState {
    let state = this.store.get(userId);
    const now = Date.now();
    if (!state) {
      state = {
        userId,
        lastActivityTimestamp: now,
        requestCount: 1,
        geminiRateLimitWindowStart: now,
        geminiRequestCount: 0,
        flaggedForReview: false
      };
    } else {
      state.lastActivityTimestamp = now;
      state.requestCount += 1;
      
      // Reset rate limit window if older than 60 seconds
      if (now - state.geminiRateLimitWindowStart > 60000) {
        state.geminiRateLimitWindowStart = now;
        state.geminiRequestCount = 0;
      }
    }
    this.store.set(userId, state);
    return state;
  }

  public incrementGeminiUsage(userId: string): boolean {
    const state = this.touch(userId);
    // Max 15 Gemini AI operations per minute per user tier
    if (state.geminiRequestCount >= 15) {
      return false;
    }
    state.geminiRequestCount += 1;
    return true;
  }

  public delete(userId: string): boolean {
    return this.store.delete(userId);
  }

  private sweepStaleSessions(): void {
    const now = Date.now();
    const staleThreshold = 2 * 60 * 60 * 1000; // 2 hours of inactivity
    let evictedCount = 0;

    for (const [userId, state] of this.store.entries()) {
      if (now - state.lastActivityTimestamp > staleThreshold) {
        this.store.delete(userId);
        evictedCount++;
      }
    }

    if (evictedCount > 0) {
      logger.info(`AccountStateStore garbage collection evicted ${evictedCount} stale sessions.`);
    }
  }
}

export const accountStateStore = new AccountStateStore();

// --- CONTINUATION FROM SEGMENT 1: ACCOUNT ROUTES & MIDDLEWARE ASSEMBLY ---

/**
 * Advanced Account Sub-Routes & Operational Sub-systems
 * All endpoints below handle specialized account management, security tokens,
 * multi-factor authentication bindings, and high-volume data exports.
 */

/**
 * @route   POST /api/v1/account/security/mfa/enable
 * @desc    Initialize Multi-Factor Authentication setup for the authenticated user
 * @access  Private
 */
router.post('/security/mfa/enable', authenticate, (req, res) => accountController.enableMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/verify
 * @desc    Verify and finalize MFA enrollment via TOTP token validation
 * @access  Private
 */
router.post('/security/mfa/verify', authenticate, (req, res) => accountController.verifyMfa(req, res));

/**
 * @route   POST /api/v1/account/security/mfa/disable
 * @desc    Disable Multi-Factor Authentication requiring password re-confirmation
 * @access  Private
 */
router.post('/security/mfa/disable', authenticate, (req, res) => accountController.disableMfa(req, res));

/**
 * @route   GET /api/v1/account/sessions
 * @desc    Retrieve all active sessions across devices for the user
 * @access  Private
 */
router.get('/sessions', authenticate, (req, res) => accountController.getActiveSessions(req, res));

/**
 * @route   DELETE /api/v1/account/sessions/:sessionId
 * @desc    Terminate a specific active session by unique session identifier
 * @access  Private
 */
router.delete('/sessions/:sessionId', authenticate, (req, res) => accountController.terminateSession(req, res));

/**
 * @route   POST /api/v1/account/export
 * @desc    Trigger an asynchronous comprehensive user data export (GDPR compliance)
 * @access  Private
 */
router.post('/export', authenticate, (req, res) => accountController.exportUserData(req, res));

/**
 * @route   GET /api/v1/account/export/status/:jobId
 * @desc    Check the status of an ongoing user data export job
 * @access  Private
 */
router.get('/export/status/:jobId', authenticate, (req, res) => accountController.getExportStatus(req, res));

/**
 * @route   PATCH /api/v1/account/preferences
 * @desc    Update granular notification, theme, and localization preferences
 * @access  Private
 */
router.patch('/preferences', authenticate, (req, res) => accountController.updatePreferences(req, res));

/**
 * @route   GET /api/v1/account/audit-logs
 * @desc    Fetch security and activity audit logs for the account
 * @access  Private
 */
router.get('/audit-logs', authenticate, (req, res) => accountController.getAuditLogs(req, res));

// --- COMPREHENSIVE ROUTER EXPORT & TERMINATION ---
export default router;
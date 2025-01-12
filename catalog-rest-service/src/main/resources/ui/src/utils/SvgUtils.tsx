import React, { FunctionComponent } from 'react';
import IconGoogle from '../assets/img/google-icon.png';
import IconWelcomePopper from '../assets/img/welcome-popper-icon.png';
import IconAPI from '../assets/svg/api.svg';
import IconSuccess from '../assets/svg/check.svg';
import IconAsstest from '../assets/svg/data-assets.svg';
import IconDoc from '../assets/svg/doc.svg';
import IconError from '../assets/svg/error.svg';
import IconCheckCircle from '../assets/svg/ic-check-circle.svg';
import IconDelete from '../assets/svg/ic-delete.svg';
import IconDownArrow from '../assets/svg/ic-down-arrow.svg';
import IconEdit from '../assets/svg/ic-edit.svg';
import IconExclamationCircle from '../assets/svg/ic-exclamation-circle.svg';
import IconExplore from '../assets/svg/ic-explore.svg';
import IconFeed from '../assets/svg/ic-feed.svg';
import IconFilter from '../assets/svg/ic-filter.svg';
import IconGrowthArrow from '../assets/svg/ic-growth-arrow.svg';
import IconHome from '../assets/svg/ic-home.svg';
import IconIncreaseArrow from '../assets/svg/ic-increase-arrow.svg';
import IconIssues from '../assets/svg/ic-issues.svg';
import IconLineage from '../assets/svg/ic-lineage.svg';
import IconLossArrow from '../assets/svg/ic-loss-arrow.svg';
import IconManage from '../assets/svg/ic-manage.svg';
import IconMenu from '../assets/svg/ic-menu.svg';
import IconMyData from '../assets/svg/ic-mydata.svg';
import IconQuality from '../assets/svg/ic-quality.svg';
import IconReply from '../assets/svg/ic-reply.svg';
import IconReports from '../assets/svg/ic-reports.svg';
import IconSchema from '../assets/svg/ic-schema.svg';
import IconSearch from '../assets/svg/ic-search.svg';
import IconSettings from '../assets/svg/ic-settings.svg';
import IconSQLBuilder from '../assets/svg/ic-sql-builder.svg';
import IconStore from '../assets/svg/ic-store.svg';
import IconTeams from '../assets/svg/ic-teams.svg';
import IconThumbsUp from '../assets/svg/ic-thumbs-up.svg';
import IconTimesCircle from '../assets/svg/ic-times-circle.svg';
import IconTrends from '../assets/svg/ic-trends.svg';
import IconUpArrow from '../assets/svg/ic-up-arrow.svg';
import IconVEllipsis from '../assets/svg/ic-v-ellipsis.svg';
import IconWorkflows from '../assets/svg/ic-workflows.svg';
import IconKey from '../assets/svg/icon-key.svg';
import IconNotNull from '../assets/svg/icon-notnull.svg';
import IconUnique from '../assets/svg/icon-unique.svg';
import IconInfo from '../assets/svg/info.svg';
import LogoMonogram from '../assets/svg/logo-monogram.svg';
import Logo from '../assets/svg/logo.svg';
import IconSetting from '../assets/svg/service.svg';
import IconTerns from '../assets/svg/terms.svg';
import IconUser from '../assets/svg/user.svg';
import IconWarning from '../assets/svg/warning.svg';

type Props = {
  alt: string;
  icon: string;
  className?: string;
} & Record<string, string>;

export const Icons = {
  LOGO: 'logo',
  LOGO_SMALL: 'logo-small',
  WELCOME_POPPER: 'welcome-popper',
  GOOGLE_ICON: 'google-icon',
  EDIT: 'icon-edit',
  EXPLORE: 'icon-explore',
  MY_DATA: 'icon-my-data',
  REPORTS: 'icon-reports',
  SETTINGS: 'icon-settings',
  SQL_BUILDER: 'icon-sql-builder',
  TEAMS: 'icon-teams',
  WORKFLOWS: 'icon-workflows',
  MENU: 'icon-menu',
  FEED: 'icon-feed',
  STORE: 'icon-store',
  THUMBSUP: 'icon-thumbs-up',
  VELLIPSIS: 'icon-v-ellipsis',
  DELETE: 'icon-delete',
  REPLY: 'icon-reply',
  SEARCH: 'icon-search',
  INFO: 'icon-info',
  SCHEMA: 'icon-schema',
  QUALITY: 'icon-quality',
  ISSUES: 'icon-issues',
  TRENDS: 'icon-trends',
  LINEAGE: 'icon-lineage',
  MANAGE: 'icon-manage',
  HOME: 'icon-home',
  GROWTH_ARROW: 'icon-growth-arrow',
  LOSS_ARROW: 'icon-loss-arrow',
  CHECK_CIRCLE: 'icon-check-circle',
  EXCLAMATION_CIRCLE: 'icon-exclamation-circle',
  TIMES_CIRCLE: 'icon-times-circle',
  FILTERS: 'icon-filters',
  UP_ARROW: 'icon-up-arrow',
  DOWN_ARROW: 'icon-down-arrow',
  INCREASE_ARROW: 'icon-increase-arrow',
  TOAST_SUCCESS: 'success',
  TOAST_ERROR: 'error',
  TOAST_WARNING: 'warning',
  TOAST_INFO: 'info',
  KEY: 'key',
  NOT_NULL: 'not-null',
  UNIQUE: 'unique',
  ASSETS: 'assets',
  SERVICE: 'service',
  USERS: 'users',
  TERMS: 'terms',
  DOC: 'doc',
  API: 'api',
};

const SVGIcons: FunctionComponent<Props> = ({
  alt,
  icon,
  className = '',
  ...props
}: Props) => {
  let IconComponent;
  switch (icon) {
    case Icons.MY_DATA:
      IconComponent = IconMyData;

      break;
    case Icons.REPORTS:
      IconComponent = IconReports;

      break;
    case Icons.EDIT:
      IconComponent = IconEdit;

      break;
    case Icons.EXPLORE:
      IconComponent = IconExplore;

      break;
    case Icons.WORKFLOWS:
      IconComponent = IconWorkflows;

      break;
    case Icons.SQL_BUILDER:
      IconComponent = IconSQLBuilder;

      break;
    case Icons.TEAMS:
      IconComponent = IconTeams;

      break;
    case Icons.SETTINGS:
      IconComponent = IconSettings;

      break;
    case Icons.LOGO:
      IconComponent = Logo;

      break;
    case Icons.LOGO_SMALL:
      IconComponent = LogoMonogram;

      break;
    case Icons.WELCOME_POPPER:
      IconComponent = IconWelcomePopper;

      break;
    case Icons.GOOGLE_ICON:
      IconComponent = IconGoogle;

      break;
    case Icons.MENU:
      IconComponent = IconMenu;

      break;
    case Icons.STORE:
      IconComponent = IconStore;

      break;
    case Icons.FEED:
      IconComponent = IconFeed;

      break;
    case Icons.THUMBSUP:
      IconComponent = IconThumbsUp;

      break;
    case Icons.VELLIPSIS:
      IconComponent = IconVEllipsis;

      break;
    case Icons.DELETE:
      IconComponent = IconDelete;

      break;
    case Icons.REPLY:
      IconComponent = IconReply;

      break;
    case Icons.SEARCH:
      IconComponent = IconSearch;

      break;
    case Icons.INFO:
      IconComponent = IconInfo;

      break;
    case Icons.SCHEMA:
      IconComponent = IconSchema;

      break;
    case Icons.QUALITY:
      IconComponent = IconQuality;

      break;
    case Icons.ISSUES:
      IconComponent = IconIssues;

      break;
    case Icons.TRENDS:
      IconComponent = IconTrends;

      break;
    case Icons.LINEAGE:
      IconComponent = IconLineage;

      break;
    case Icons.MANAGE:
      IconComponent = IconManage;

      break;
    case Icons.HOME:
      IconComponent = IconHome;

      break;
    case Icons.GROWTH_ARROW:
      IconComponent = IconGrowthArrow;

      break;
    case Icons.LOSS_ARROW:
      IconComponent = IconLossArrow;

      break;
    case Icons.CHECK_CIRCLE:
      IconComponent = IconCheckCircle;

      break;
    case Icons.EXCLAMATION_CIRCLE:
      IconComponent = IconExclamationCircle;

      break;
    case Icons.TIMES_CIRCLE:
      IconComponent = IconTimesCircle;

      break;
    case Icons.FILTERS:
      IconComponent = IconFilter;

      break;
    case Icons.UP_ARROW:
      IconComponent = IconUpArrow;

      break;
    case Icons.DOWN_ARROW:
      IconComponent = IconDownArrow;

      break;
    case Icons.INCREASE_ARROW:
      IconComponent = IconIncreaseArrow;

      break;
    case Icons.TOAST_SUCCESS:
      IconComponent = IconSuccess;

      break;
    case Icons.TOAST_ERROR:
      IconComponent = IconError;

      break;
    case Icons.TOAST_WARNING:
      IconComponent = IconWarning;

      break;
    case Icons.KEY:
      IconComponent = IconKey;

      break;
    case Icons.NOT_NULL:
      IconComponent = IconNotNull;

      break;
    case Icons.UNIQUE:
      IconComponent = IconUnique;

      break;
    case Icons.ASSETS:
      IconComponent = IconAsstest;

      break;
    case Icons.TOAST_INFO:
      IconComponent = IconInfo;

      break;
    case Icons.SERVICE:
      IconComponent = IconSetting;

      break;
    case Icons.USERS:
      IconComponent = IconUser;

      break;
    case Icons.TERMS:
      IconComponent = IconTerns;

      break;
    case Icons.DOC:
      IconComponent = IconDoc;

      break;
    case Icons.API:
      IconComponent = IconAPI;

      break;

    default:
      IconComponent = null;
  }

  return IconComponent ? (
    <img
      alt={alt}
      className={`svg-icon ${className}`}
      src={IconComponent}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  ) : null;
};

export default SVGIcons;

import gql from "graphql-tag";

// query to get Total Company, Contact and Deal Counts
export const DASHBOARD_TOTAL_COUNTS_QUERY = gql `
    query DashboardTotalCounts {
        companies {
            totalCount
        }
        contacts {
            totalCount
        }
        deals {
            totalCount
        }
    }
`;

// query to get upcoming events
export const DASHBOARD_CALENDAR_UPCOMING_EVENTS_QUERY = gql `
    query DashboardCalendarUpcomingEvents(
        $filter: EventFilter!
        $sorting: [EventSort!]
        $paging: OffsetPaging!
    ) {
        events(filter: $filter, sorting: $sorting, paging: $paging) {
            totalCount
            nodes {
                id
                title
                color
                startDate
                endDate
            }
        }
    }
`;

// quary to get deals chart
export const DASHBOARD_DEALS_CHART_QUERY = gql `
    query DashboardDealsChart(
        $filter: DealStageFilter!
        $sorting: [DealStageSort!]
        $paging: OffsetPaging
    ) {
        dealStages(filter: $filter, sorting: $sorting, paging: $paging) {
            # Get all deal stages
            nodes {
                id
                title
                # Get the sum of all deals in this stage and group by closeDateMonth and closeDateYear
                dealsAggregate {
                    groupBy {
                        closeDateMonth
                        closeDateYear
                    }
                    sum {
                        value
                    }
                }
            }
            # Get the total count of all deals in this stage
            totalCount
        }
    }
`;

// query to get latest activities deals
export const DASHBOARD_LATEST_ACTIVITIES_DEALS_QUERY = gql `
    query DashboardLatestActivitiesDeals (
        $filter: DealFilter!
        $sorting: [DealSort!]
        $paging: OffsetPaging
    ) {
        deals(filter: $filter, sorting: $sorting, paging: $paging) {
            totalCount
            nodes {
                id
                title
                stage {
                    id
                    title
                }
                company {
                    id
                    name
                    avatarUrl
                }
                createdAt
            }
        }
    }
`;

// query to get latest activities audits
export const DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY = gql `
    query DashboardLatestActivitiesAudits (
        $filter: AuditFilter!
        $sorting: [AuditSort!]
        $paging: OffsetPaging
    ) {
        audits(filter: $filter, sorting: $sorting, paging: $paging) {
            totalCount
            nodes {
                id
                action
                targetEntity
                targetId
                changes {
                    field
                    from
                    to
                }
                createdAt
                user {
                    id
                    name
                    avatarUrl
                }
            }
        }
    }
`;

// query to get companies list
export const COMPANIES_LIST_QUERY = gql `
    query CompaniesList (
        $filter: CompanyFilter!
        $sorting: [CompanySort!]
        $paging: OffsetPaging!
    ) {
        companies(filter: $filter, sorting: $sorting, paging: $paging) {
            totalCount
            nodes {
                id
                name
                avatarUrl
                # Get the sum of all deals in this company
                dealsAggregate {
                    sum {
                        value
                    }
                }
            }
        }
    }
`;
import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
    /**
     * A resource in Refine performs these actions:
     * list -> get all records (Read)
     * show -> get all single records (Read)
     * create -> create a new record (Create)
     * edit -> update a record (Update)
     * delete -> delete a record (Delete)
     * or clone
     */
    {
        name: 'dashboard',
        list: '/',
        meta: {
            label: 'Dashboard',
            icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        }
    },
    {
        name: 'companies',
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/new',
        edit: '/companies/edit/:id',
        meta: {
            label: 'Companies',
            icon: <ShopOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        }
    },
    {
        name: 'tasks',
        list: '/tasks',
        create: '/tasks/new',
        edit: '/tasks/edit/:id',
        meta: {
            label: 'Tasks',
            icon: <ProjectOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        }
    }
]
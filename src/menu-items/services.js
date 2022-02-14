
const services = {
    id: 'services',
    title: 'services',
    type: 'group',
    children: [
    {
        id: 'addservices',
        title: 'Add Service',
        type: 'item',
        url: '/addservices',
        breadcrumbs: false
    },
    {
        id: 'servicesinfo',
        title: 'Services List',
        type: 'item',
        url: '/servicesinfo',
        breadcrumbs: false
    }
    ]
};

export default services;

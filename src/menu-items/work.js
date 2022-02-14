
const work = {
    id: 'work',
    title: 'work',
    type: 'group',
    children: [
    {
        id: 'addwork',
        title: 'Add Work',
        type: 'item',
        url: '/addwork',
        breadcrumbs: false
    },
    {
        id: 'categories',
        title: 'Work Categories',
        type: 'item',
        url: '/workcategories',
        breadcrumbs: false
    },
    {
        id: 'workinfo',
        title: 'Work List',
        type: 'item',
        url: '/workinfo',
        breadcrumbs: false
    }
    ]
};

export default work;

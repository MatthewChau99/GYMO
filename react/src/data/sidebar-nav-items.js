export default function () {
    return [
        {
            title: "Dashboard",
            to: "/blog-overview",
            htmlBefore: '<i class="material-icons">edit</i>',
            htmlAfter: ""
        },
        {
            title: "Blog Posts",
            htmlBefore: '<i class="material-icons">vertical_split</i>',
            to: "/blog-posts",
        },
        {
            title: "Add New Post",
            htmlBefore: '<i class="material-icons">note_add</i>',
            to: "/add-new-post",
        },
        {
            title: "Calorie Calculator",
            htmlBefore: '<i class="material-icons">&#xea5f;</i>',
            to: "/calorie-calculator",
        },
        {
            title: "Personal Info",
            htmlBefore: '<i class="material-icons">person</i>',
            to: "/personal-info",
        }
    ];
}

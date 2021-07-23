export default function MasonryModule() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
       
        columnWidth: 318,

        // columnWidth: 320,
        horizontalOrder: false,
    });
}
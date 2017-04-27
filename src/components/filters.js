// var FilterList = React.createClass({
//
//   render: function() {
//     console.log(gallery.fields.makeAndModel.fields.file.url, 'gallery')
//
//     var self = this;
//     console.log(this, 'this');
//     var filters = this.props.options.map(function (option, index) {
//       return (
//         <button key={option + index} onClick={function () { self.props.changeFilterBy(option) }}>{option}</button>
//       );
//     });
//
//     return (
//       <ul className="options">
//         {filters}
//       </ul>
//     );
//   }
// });
//
//  handleFiltering: function () {
//    if (this.state.filterBy) {
//      var filteredData = this.props.GalleryThumb.filter((gallery, index) => {
//        if (String(gallery[this.state.filterBy]).toLowerCase().includes(this.state.filterText.toLowerCase())) {
//          return FilterList
//        }
//      });

     // &&&&&&&&&&&&&&&&&&&&&&& SEPERATE ATTEMPT &&&&&&&&&&&&&&&&&&&&&&&

// var FilteredList = React.createClass({
//   filterList: function(gallery){
//     console.log(gallery.fields.makeAndModel.fields.file.url, 'gallery');
//
//
//     var updatedList = this.state.initialItems;
//     updatedList = updatedList.filter(function(item){
//       return item.toLowerCase().search(
//         event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({items: updatedList});
//   },
//   getInitialState: function(gallery){
//
//      return {
//        initialItems: [
//        "Ford",
//        "Chevy",
//        "Dodge",
//        "Hummer",
//        "Land Rover",
//        "Jeep",
//        "Isuzu",
//        "International",
//        "Toyota",
//        "Nissan",
//        "Randge Rover",
//        "Fuqi",
//      ],
//        items: [updatedList]
//      }
//   },
//
//   componentWillMount: function(){
//     this.setState({items: this.state.initialItems})
//   },
//   render: function(){
//     return (
//       // <div className="filter-list">
//       //   <input type="text" placeholder="Search" onChange={this.filterList}/>
//       // <List items={this.state.items}/>
//       // </div>
//       <ul className="o-listReset">
//       {
//         updatedList.map(
//           (entry, index) => (<li key={index} className="o-tag">{ entry }</li>)
//         )
//       }
//       </ul>
//     );
//   }
// });
//
// var List = React.createClass({
//   render: function(){
//     return (
//       <ul>
//       {
//         updatedList.map((entry, index) => {
//           return (
//             <li key={gallery.sys.id}>
//               <div styleName="c-gallery__modalOpenLink">
//                 <Link to={`/gallery/${gallery.sys.id}/image/${gallery.fields.makeAndModel.fields.file.url}`} >
//                   <ResponsiveImage src={ gallery.fields.makeAndModel.fields.file.url } alt={`Open Gallery ${gallery.sys.id}`} />
//                 </Link>
//                 <div styleName="c-gallery__modalOpenTitle">{ gallery.fields.makeAndModel.fields.title }</div>
//               </div>
//               <div styleName="c-gallery__modalOpen_Title"><h3>VEHICLE:</h3>{ gallery.fields.makeAndModel.fields.title }</div>
//               <div styleName="c-gallery__modalOpenSeen"><h3>SEEN AT:</h3>{ gallery.fields.seenWhere }</div>
//               <div styleName="c-gallery__modalOpenDetail"><h3>DETAILS:</h3>  { gallery.fields.details }</div>
//             </li>
//
//           )
//         })
//         // this.props.items.map(function(item) {
//         //   return <li key={item}>{item}</li>
//         // })
//        }
//       </ul>
//     )
//   }
// });
//
// React.render(<FilteredList/>, document.getElementById('c-galleryThumb'));

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './GalleryThumb.css'
import Author from './Author'
import Date from './Date'
import Location from './Location'
import ResponsiveImage from './ResponsiveImage'

function GalleryThumb ({ gallery }) {
  console.log(gallery.fields.makeAndModel.fields.file.url, 'gallery');
    return (
        // <div id="search-box_container">
        //   <h1>Search Box</h1>
        // </div>
    <div styleName="c-galleryThumb">
      <figure styleName="c-galleryThumb__figure">
        <Link to={`/gallery/${gallery.sys.id}`} styleName="c-galleryThumb__imageContainer">
          <ResponsiveImage src={ gallery.fields.makeAndModel.fields.file.url } alt={ `Open Gallery ${gallery.sys.id}` }/>
        </Link>

        <figcaption styleName="c-galleryThumb__caption">
          <div styleName="c-galleryThumb__title"><h4>VEHICLE:</h4>  { gallery.fields.makeAndModel.fields.title }</div>
          <div styleName="c-galleryThumb__title"><h4>SEEN AT:</h4>{ gallery.fields.seenWhere }</div>
          <div styleName="c-galleryThumb__title"><h4>DETAILS:</h4>  { gallery.fields.details }</div>

          {/* <div className="u-marginBottomSmall">
            <Author author={ gallery.fields.details }></Author>
          </div> */}

          { renderTags(gallery) }

          <div className="u-marginBottomSmall u-flexHorizCenter">
            <Date entry={ gallery.fields.date } />
            <Location entry={ gallery.fields.location } />
          </div>

        </figcaption>
      </figure>
      <div className="u-flexHorizCenter u-marginTopAuto u-marginBottomDefault u-paddingHorizDefault">
        {/* <Link to={`/gallery/${gallery.sys.id}`} className="o-btnPrimary"><h3>Take Closer Look</h3></Link> */}
      </div>
    </div>
  )
}

function renderTags (gallery) {
  if (gallery.fields.tags) {
    return (
      <ul className="o-listReset">
      {
        gallery.fields.tags.map(
          (entry, index) => (<li key={index} className="o-tag">{ entry }</li>)
        )
      }
      </ul>
    )
  }
}

// &&&&&&&&&&&&&&&&&&&&&&& FILTERED GALLERY &&&&&&&&&&&&&&&&&&&&&&&
var FilterList = React.createClass({

  render: function() {
    console.log(gallery.fields.makeAndModel.fields.file.url, 'gallery')

    var self = this;
    console.log(this, 'this');
    var filters = this.props.map(function (gallery, index) {
      return (
        <button key={gallery + index} onClick={function () { self.props.changeFilterBy(gallery) }}>{gallery}</button>
      );
    });

    return (
      <ul className="options">
        {filters}
      </ul>
    );
  }
});

 // handleFiltering: function () {
 //   if (this.state.filterBy) {
 //     var filteredData = this.props.GalleryThumb.filter((gallery, index) => {
 //       if (String(gallery[this.state.filterBy]).toLowerCase().includes(this.state.filterText.toLowerCase())) {
 //         return FilterList
 //       }
 //     });
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

// React.render(<FilteredList/>, document.getElementById('c-galleryThumb'));

// &&&&&&&&&&&&&&&&&&&&&&& FILTERED GALLERY &&&&&&&&&&&&&&&&&&&&&&&


GalleryThumb.propTypes = { gallery: PropTypes.object }

export default CSSModules(GalleryThumb, styles)

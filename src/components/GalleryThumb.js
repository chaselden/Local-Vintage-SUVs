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
        <Link to={`/gallery/${gallery.sys.id}`} className="o-btnPrimary"><h3>Take Closer Look</h3></Link>
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

GalleryThumb.propTypes = { gallery: PropTypes.object }

export default CSSModules(GalleryThumb, styles)

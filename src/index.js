import React, { Component } from 'react'

import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.min.css'

export default class RcViewer extends Component {
  constructor (props) {
    super(props)
    this.container = null
    this.viewer = null
  }
  componentDidMount () {
    this.viewerInit()
  }
  getViewer () {
    return {
      viewer: this.viewer,
      container: this.container
    }
  }
  componentDidUpdate () {
    if (!this.viewer || this.isIdentical()) return
    this.viewerInit()
  }
  componentWillUnmount () {
    if (this.viewer) this.viewer.destroy()
  }
  isIdentical () {
    const imgarr = this.viewer.images || []
    this.viewer.update()
    const imgarr2 = this.viewer.images || []
    if (!imgarr.length && !imgarr2.length) return true
    if (imgarr.length !== imgarr2.length) return false
    return imgarr2.every((img,index) => imgarr[index] === img && img.src === imgarr[index].src)
  }
  viewerInit () {
    if (this.viewer) this.viewer.destroy()
    const { options = {}, children } = this.props
    this.viewer = new Viewer(this.container, {
      navbar: !!(Array.isArray(children) && children.length),
      ...options
    })
  }
  render () {
    const { options = {}, children, ...others } = this.props
    return (
      <div ref={(container) => { this.container = container }} {...others}>
        {children}
      </div>
    )
  }
}

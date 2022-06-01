import React, { Component } from 'react'
import "../Styles/NetArt.css";

   /**
    * @readonly
    * @return{Element}
    */
   get canvas(){
     return this.refs.canvas;
   }
   /**
    * @private
    */
   loadStatusChanged(){
     if(this._loader.progress == 1&& !!this._target){
          this._grid.setTarget(this._target)
          .then(this.drawCanvas);
     }
   }
   /**
    * @example
    * mosaic.draw();
    * 
    * @public
    */
   drawCanvas(){
     if(!this.canvas){
       return;
     }
     const context = this.canvas.getContext('2d');
     context.drawImage(
       this._grid.canvas,
       0,0,
       this.props.width,
       this.props.height
     );

     if(typeof this.onDraw !== 'undefined'){
        this.onDraw(this._grid)
     }
   }
   setSize (width =0, height =0, columns =0, rows=0){
     this.canvas.width =width;
     this.canvas.height = height;

     this._grid.setSize(width, height, columns, rows);
      if(!!this._target && this._grid.poolSize >0){
            this._target.setSize(columns, rows, 
              this.getPixelAspectRatio(width, height, columns, rows));
              return this._grid.drawGrid()
              .then(this.drawCanvas);

              }
      }

      handleTargetProp(target)
      {
        if (typeof target === 'string'){
              this.setTargetFromURl(target);
              }
              else if(typeof target === 'object'&& target.src){
                  this.setTargetImage(target);
              }
        }

/**
 * @example
 * mosaic.setTargetFromURl('path/to.image.jpg');
 * @public
 * @param{String} url Path to image
 */
      setTargetFromURl(url)
      this ._loader.load(url)
      .then(image =>{
        this.setTargetImage(image);
      })
      .catch(error =>{
        //console.warn('[mosaic.js'] Error loading' + url +'-',error);
      })
      .then(()=>{

      });
    /**
     * @example
     * var image = new Image()
     * image .src ="https://path/to/image.jpg"
     * image.onload = function(){
     * mosiac.setTargetImage(image)}
     * 
     * @public
     * @param{Image} image 
     */
setTargetImage(image);{
  this._target= new picture(
    image, 
    this.props.columns,
    this.props.rows,
    this.getPixelAspectRatio
  );
  this.loadStatusChanged();
  }
/**
 * @example 
 * mosaic. addSourceFromURl( 'path/to/image.jpg);
 * @public
 * @param {String} url path to image
 */
 addSourceFromURL(url);{
    this._loader.load(url)
    .then(image =>{
      this.addSource(image);
    })
    .catch(error=>{
      console.warn('[mosaic.js]Error loading'+url+'-', error);
    })
    .then(()=>{
        if(this.props.onLoadProgress){
          this.props.onLoadProgress(this._loader.progress);
        }
        if(this._loader.progress ==1){
          this.loadStatusChanged();
        }
    });
    
  }
  /**
   * @private
   * @param {Image} image
   */
  addSource(image); {
    let picture = new picture(
      image, 
      Math.floor(this.props.width/ this.props.columns),
      Math.floor(this.props.height / this.props.rows)
    );
    this._grid.addPicture(picture);
  }
  /**
   * @param{any} e
   * @memberof NetArtHair  
*/

clickedCanvas(e);{
  if(this.props.onClick){
    const {width, columns, height, rows}= this.props;
    const {offset}= getMousePosition(e);

    const col =Math.floor(offset.x/width*columns);
    const row = Math.floor(offset.y / height*rows);
    const color = this._grid.getGridSquare(col, row);
    const pic = this._grid.getPictureByColor(color);

    this.props.onClick({
      colum :col,
      row: row,
      color: color,
      image: pic.image
    })
  }
}
  componenrDidMount();{
    this.canvas.width = this.props.width;
    this.canvas. height = this.props.height;

    this._grid.colorBlending = this. props.colorBlending;

    this.setSize(
      this.props.width,
      this.props.height,
      this.props.columns,
      this.props.rows
    );
    if(this.props.sources.length){
      this.props.sources.forEach(this.addSourceFromURL)
        
      }
    }
    if(this.props.target){
      this.handleTargetProp(this.props.target);

    }
  
componentWillReceiveProps(next) 
{
      if(next.target && next.target !== this.props.target){
        this.handleTargetProp(next.target);
      }
      
   if(propsHasChanged('sources', next, this.props)){
     next. sources.filter(
       Source=> this.props.sources.indexof(Source) === -1)
       .forEach(this.addSourceFromURL); 
   }
   if(propsHasChanged('colorBlending', next, this.props)){
     this._grid.colorBlending =next.colorBlending;
     this._grid.drawGrid()
     .then(this.drawCanvas);
   }
   if(propsHasChanged('colorBlending', next, this.props)){
     this._grid.colorBlending =next.colorBlending;
     this._grid.drawGrid()
     .then(this.drawCanvas);
   }
   if(propsHasChanged(
     ['width', 'height', 'columns', ' rows'],next, this.props   
   )){
     this,setSize(
       next.width,
       next.height,
       next.columns, 
       next.rows
     );
   }
  
} 
   render()
   {
          return <canvas
          onclick ={this.clickedCanvas}
          ref="canvas" width={this.props.width}
          height={this.props.height}/>
    }
}

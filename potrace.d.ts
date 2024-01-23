export type OptType = "curve";

export module Potrace {
  /**
   * load image from File API
   */
  function loadImageFromFile(file: File): void;

  /**
   * load image from URL because of the same-origin policy, can not load image
   * from another domain. input color/grayscale image is simply converted to
   * binary image. no pre- process is performed.
   **/
  function loadImageFromUrl(url: string): void;

  /**
   *   setParameter({para1: value, ...}) : set parameters
   *     parameters:
   *        turnpolicy ("black" / "white" / "left" / "right" / "minority" / "majority")
   *          how to resolve ambiguities in path decomposition. (default: "minority")
   *        turdsize
   *          suppress speckles of up to this size (default: 2)
   *        optcurve (true / false)
   *          turn on/off curve optimization (default: true)
   *        alphamax
   *          corner threshold parameter (default: 1)
   *        opttolerance
   *          curve optimization tolerance (default: 0.2)
   */
  function setParameter(parameters: {
    turnpolicy?: "black" | "white" | "left" | "right" | "minrority" | "majority";
    turdsize?: number;
    optcurve?: boolean;
    alphamax?: number;
    opttolerance?: number;
  }): void;

  /**
   * wait for the image be loaded, then run potrace algorithm, then call callback
   * function.
   */
  function process(callback: () => void): void;

  /**
   * return a string of generated SVG image. result_image_size =
   * original_image_size * size optional parameter opt_type can be "curve"
   */
  function getSVG(size?: number, opt_type?: OptType): string;

  /**
   * Traces an image returning an svg
   */
  function trace(imageData: ImageData, size?: number, opt_type?: OptType): string;
}

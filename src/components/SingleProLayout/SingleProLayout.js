import { useEffect } from "react";
import "./SingleProLayout.css";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/productContext";

const API = "https://api-data-e3yn.onrender.com/products";

const SingleProLayout = () => {
  const { getSingleProduct, isSingleLoading, singleProducts } =
    useProductContext();

  const { id } = useParams();

  const {
    smallImg1,
    smallImg2,
    smallImg3,
    smallImg4,
    smallImg5,
    imgSrc,
    title,
    extraOff,
    price,
    actualPrice,
    discount,
    warrentyImg,
    warrentyDetail,
    colors,
    color1,
    color2,
    color3,
    storage,
    str1,
    str2,
    str3,
    highlights,
    highlts1,
    highlts2,
    highlts3,
    highlts4,
    DescHeading,
    shortDesc,
    productDescription,
    heading1,
    info1,
    heading1Img,
    heading2Img,
    heading2,
    info2,
    heading3,
    info3,
    heading3Img,
    heading4Img,
    heading4,
    info4,
    heading5,
    info5,
    heading5Img,
  } = singleProducts;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
    // eslint-disable-next-line
  }, [id]);

  if (isSingleLoading) {
    return <div>... Loading</div>;
  }

  return (
    <>
      <div className="singleprocontainer">
        <div className="singleprolayout">
          <div className="singleproimage">
            <div className="singleprosideimg">
              <div className="singleimglist">
                <img src={smallImg1} alt="" />
                <img src={smallImg2} alt="" />
                <img src={smallImg3} alt="" />
                <img src={smallImg4} alt="" />
                <img src={smallImg5} alt="" />
              </div>
            </div>

            <div className="singleproimgbtn">
              <div className="wishlist">
                <button>
                  <i className="fas fa-heart"></i>
                </button>
              </div>
              <div className="singleproimages">
                <img src={imgSrc} alt="" />
              </div>
              <div className="singlebtnlist">
                <div className="addbtn">
                  <button>Add to Cart</button>
                </div>
                <div className="addbtn">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="singleprodetail">
            <div className="singleproheading">
              <h3>{title}</h3>
            </div>

            <div className="singlepriceextra">
              <p>{extraOff}</p>
            </div>
            <div className="singlepricedetails">
              <div className="singlemainprice">
                <p>₹{price}</p>
              </div>
              <div className="singleactualprice">
                <p>₹{actualPrice}</p>
              </div>
              <div className="singlediscount">
                <p>{discount}</p>
              </div>
            </div>

            <div className="singlewarrentydetails">
              <div className="singlewarrentyimg">
                <img src={warrentyImg} alt="" />
              </div>
              <div className="singlewarrentyheading">
                <p>{warrentyDetail}</p>
              </div>
            </div>

            <div className="singlecolorsdetails">
              <div className="singlecolorheading">
                <p>{colors}</p>
              </div>
              <div className="singlecolorlist">
                <img src={color1} alt="" />
                <img src={color2} alt="" />
                <img src={color3} alt="" />
              </div>
            </div>

            <div className="singlestoragedetails">
              <div className="singlestorageheading">
                <p>{storage}</p>
              </div>
              <div className="singlestoragelist">
                <p>{str1}</p>
                <p>{str2}</p>
                <p>{str3}</p>
              </div>
            </div>

            <div className="singlehighlightdetails">
              <div className="singlehighlightsheading">
                <p>{highlights}</p>
              </div>
              <div className="singlehighlightslist">
                <ul>
                  <li>
                    <p>{highlts1}</p>
                  </li>
                  <li>
                    <p>{highlts2}</p>
                  </li>
                  <li>
                    <p>{highlts3}</p>
                  </li>
                  <li>
                    <p>{highlts4}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="singledescrpdetails">
              <div className="singledecrheading">
                <p>{DescHeading}</p>
              </div>
              <div className="singledescdetailing">
                <p>{shortDesc}</p>
              </div>
            </div>

            <div className="singleprodesc">
              <div className="singleprodheading">
                <p>{productDescription}</p>
              </div>

              <hr />

              <div className="singleproductdetails">
                <div className="singleproductsdetailings">
                  <div className="singleproddetails">
                    <p>{heading1}</p>
                  </div>
                  <div className="singleproddescriptions">
                    <p>{info1}</p>
                  </div>
                </div>
                <div className="singleproductimages">
                  <img src={heading1Img} alt="" />
                </div>
              </div>

              <hr />

              <div className="singleproductdetails">
                <div className="singleproductimages">
                  <img src={heading2Img} alt="" />
                </div>
                <div className="singleproductsdetailings">
                  <div className="singleproddetails">
                    <p>{heading2}</p>
                  </div>
                  <div className="singleproddescriptions">
                    <p>{info2}</p>
                  </div>
                </div>
              </div>

              <hr />

              <div className="singleproductdetails">
                <div className="singleproductsdetailings">
                  <div className="singleproddetails">
                    <p>{heading3}</p>
                  </div>
                  <div className="singleproddescriptions">
                    <p>{info3}</p>
                  </div>
                </div>
                <div className="singleproductimages">
                  <img src={heading3Img} alt="" />
                </div>
              </div>

              <hr />

              <div className="singleproductdetails">
                <div className="singleproductimages">
                  <img src={heading4Img} alt="" />
                </div>
                <div className="singleproductsdetailings">
                  <div className="singleproddetails">
                    <p>{heading4}</p>
                  </div>
                  <div className="singleproddescriptions">
                    <p>{info4}</p>
                  </div>
                </div>
              </div>

              <hr />

              <div className="singleproductdetails">
                <div className="singleproductsdetailings">
                  <div className="singleproddetails">
                    <p>{heading5}</p>
                  </div>
                  <div className="singleproddescriptions">
                    <p>
                      {info5}
                    </p>
                  </div>
                </div>
                <div className="singleproductimages">
                  <img
                    src={heading5Img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProLayout;

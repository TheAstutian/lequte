import React from "react";
import {Link} from 'react-router-dom';
import Ztext from "react-ztext";
import './Navigation.css'


const Navigation = ()=>{
    const wrapperStyle = {
        
        
        position: "absolute",
       top: 0,
        top: 0,
        left: 0,
        right: 0,
       bottom: 0,
       height: 100,
       margin: "auto",
        //textAlign: "center",
       marginLeft: "100px", 
        width: "100px",
       height: "100px", 
      //  fontSize: "3.5em",//
      border: "2px solid blue"
     
      
      };

    return (
        <div className="ph5"
            style={{display:"flex", justifyContent: "space-between"}}
            >
                <div className="pa2">
                    <div    >   
                        <Link to="/" >
                            <Ztext 
                              
                                depth="10px"
                                direction="both"
                                event="pointer"
                                eventRotation="80deg"
                                eventDirection="default"
                                fade={false}
                                layers={20}
                                perspective="100px"
                            >
                              
                              <h1 className="logo">O</h1>
                            </Ztext>   
                        </Link>
                        
                    </div>
                </div>

            <div className=' pa2 navigation' >
                <a className="no-underline near-white bg-animate email inline-flex items-center ma2 tc br2 pa2" href="mailto:speakingatoms@gmail.com" target="blank">
                <svg className = "dib h2 w2" fill = "currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                <span id="span">speakingatoms@gmail.com</span>
                </a>

                <a className="no-underline near-white bg-animate inline-flex items-center ma2 tc br2 pa2" href="https://github.com/TheAstutian" target="blank">
                    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                </a>
                <a className="no-underline near-white bg-animate inline-flex items-center ma2 tc br2 pa2" href="https://twitter.com/lequte" target="blank">
                    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
                 </a>
            </div>
        </div>
    )
}

export default Navigation;

// <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CodeChef</title><path d="M11.2574.0039c-.37.0101-.7353.041-1.1003.095C9.6164.153 9.0766.4236 8.482.694c-.757.3244-1.5147.6486-2.2176.7027-1.1896.3785-1.568.919-1.8925 1.3516 0 .054-.054.1079-.054.1079-.4325.865-.4873 1.73-.325 2.5952.1621.5407.3786 1.0282.5408 1.5148.3785 1.0274.7578 2.0007.92 3.1362.1622.3244.3235.7571.4316 1.1897.2704.8651.542 1.8383 1.353 2.5952l.0057-.0028c.0175.0183.0301.0387.0482.0568.0072-.0036.0141-.0063.0213-.0099l-.0213-.5849c.6489-.9733 1.5673-1.6221 2.865-1.8925.5195-.1093 1.081-.1497 1.6625-.1278a8.7733 8.7733 0 0 1 1.7988.2357c1.4599.3785 2.595 1.1358 2.6492 1.7846.0273.3549.0398.6952.0326 1.0364-.001.064-.0046.1285-.007.193l.1362.0682c.075-.0375.1424-.107.2059-.1902.0008-.001.002-.002.0028-.0028.0018-.0023.0039-.0061.0057-.0085.0396-.0536.0747-.1236.1107-.1931.0188-.0377.0372-.0866.0554-.1292.2048-.4622.362-1.1536.538-1.9635.0541-.2703.1092-.4864.1633-.7027.4326-.9733 1.0266-1.8382 1.6213-2.6492.9733-1.3518 1.8928-2.5962 1.7846-4.0561-1.784-3.4608-4.2718-4.0017-5.5695-4.272-.2163-.0541-.3233-.0539-.4856-.108-1.3382-.2433-2.4945-.3953-3.6046-.3648zm5.0428 14.3788a9.8602 9.8602 0 0 0-.0326-.9824c-.0541-.703-1.1892-1.46-2.7032-1.8386-.588-.1336-1.1764-.2142-1.7448-.2356-.539-.0137-1.0657.0248-1.5546.1277-1.2436.2704-2.2162.9193-2.811 1.8925l.0511 1.431c.6672-.3558 1.7326-.8747 3.139-.9994.0662-.0059.1368-.0059.2044-.0099.1177-.013.2667-.044.4444-.044 1.6075 0 3.2682.5336 4.8767 1.6483.039-.2744.0611-.549.071-.8234l.044.0227c.0028-.0622.0143-.1268.0156-.1888zM11.256.0578c.1239-.0034.2538.01.379.0114-.23-.0022-.4588.0026-.6871.0156.103-.0061.2046-.0242.308-.027zm.4983.0156c.6552.014 1.3255.0711 2.0387.1803-.6834-.0987-1.3646-.1671-2.0387-.1803zm-1.3147.0554c-.076.0087-.1527.0133-.2285.0241-.8168.1167-1.7742.7015-2.75 1.045.3545-.1323.7143-.2957 1.0747-.4501C9.0765.4774 9.6705.207 10.1571.1529c.0939-.0139.1886-.0133.2825-.0241zm-.2285.24c.1622 0 .3787-.0002.5409.0539-.1425-.0357-.2595-.026-.3706-.0142a1.174 1.174 0 0 1 .3166.0681c.5796 1.0012-.4264 5.2791-.6786 8.1492.1559 1.0276.3138 1.9963.4628 2.7201-.7029-1.7843-1.4067-4.921-1.5148-7.354-.054-.9733.001-1.8386.2172-2.4874C9.401.8557 9.7244.4228 10.2111.3687zm3.1361.271c-.811 2.1088-.9184 6.1092-.9725 7.3528-.054.5407-.0001 1.73.054 2.5952 0 .2163.054.4325.054.6488 0-.2163-.054-.3786-.054-.5948-.4326-3.2442-.974-7.1362.9185-10.002zm3.352.3777c-.2704 2.1628-1.4047 3.191-1.7832 5.2998-.1081 1.6762-.325 3.6222-.379 5.2984-.0541-1.6762-.0007-3.4601.2697-5.2444.2703-1.8384.8651-3.6776 1.8925-5.3538zm-10.381.433c-.3581.1194-.632.248-.8575.3805.2317-.1358.4996-.2666.8575-.3805zm.2101.1974c.2155.0025.4384.0734.6006.2357-.0067-.004-.0078-.0033-.0142-.0071.1331.0929.2666.2093.3932.3847-.2036.9673.2553 3.0317.0398 4.6694.0763 1.5485.0717 3.1804.849 4.4594-.9796-1.5107-1.176-3.4375-1.3218-5.236-.1128-1.0907-.2035-2.0969-.4642-2.9033-.144-.3047-.2684-.5745-.3833-.822-.0247-.0369-.0447-.0784-.071-.1135-.1082-.1082-.1619-.2696-.1619-.3777 0-.054.0539-.1618.108-.1618.054-.0541.1616-.0553.2157-.1094a1.013 1.013 0 0 1 .2101-.0184zm-1.3459.6133c-.0604.0201-.0923.041-.1405.061.1768-.034.3617.0339.5196.318-.1877.8916.4364 3.3685.4288 5.104.3124 1.8478.5496 3.8498 1.5716 5.1152C6.3723 11.5076 5.886 9.1286 5.5076 7.128 5.183 5.56 4.9125 4.2086 4.3718 3.776c-.054-.1081-.1079-.163-.1079-.2711 0-.1622-.0002-.3786.1079-.5949-.2772.6337-.4047 1.2673-.3706 1.901-.0445-.6487.0857-1.2905.3706-1.901 0-.054.054-.0538.054-.1079.012-.016.0314-.0349.044-.0511.0618-.0983.1308-.189.2257-.257.0557-.0615.0965-.1191.159-.1817-.0526.0555-.0872.1092-.1335.1647.0273-.018.0523-.0368.0838-.0525.1081-.1082.2154-.1633.3776-.1633zm-.3776.1633c-.0038.0075-.0076.0111-.0114.0184.0125-.0099.0242-.0208.037-.0298-.0074.0037-.0182.0077-.0256.0114zm14.7608 1.1343c-.0017.0052-.004.0104-.0057.0156.0378-.005.0751-.0173.1135-.0156-.0378-.0022-.0763.0103-.115.0199-.8634 2.6418-1.8874 5.2844-2.9118 7.9262a.0184.0184 0 0 1-.0015.0028c-.0874.4652-.234.8842-.5395 1.1898.4326-.4867.4854-1.1907.5395-2.0558.054-.811.0544-1.6761.487-2.5413 0-.0531.0012-.1058.0525-.159.0003-.0009.0012-.0019.0015-.0028.0973-.3524.202-.6885.3166-1.018.4183-1.2896 1.1396-3.1653 2.0131-3.3405.0163-.0052.034-.018.0497-.0213zM8.3726 16.2113l-.3238.1079c.1623.2163.2696.379.3777.433.1081.054.2168.108.379.108.0541 0 .1618 0 .2159-.054l.812-.2698c.0541 0 .1078-.054.1619-.054.1081 0 .1616 0 .2697.054l.2712.2698.2697-.054c-.1081-.1622-.2695-.3236-.3776-.3776-.1082-.0541-.2169-.1094-.379-.1094h-.108l-.866.3252h-.1618c-.1082 0-.2157 0-.2698-.054-.054-.054-.163-.1629-.2712-.3251zm-2.5953.541c-.2703.1621-.649.4324-1.1897.6487-.5407.2163-.9734.4325-1.1897.6488-.2163.2163-.3237.4326-.3237.6488 0 .1082.0537.1632.1618.2172.054.0541.1632.0539.2172.108.757.3244 1.5133.7019 2.2162 1.0803.1082.0541.2171.1632.2712.2173.054.054.1078.054.1618.054.1082 0 .2695-.0538.3777-.162.1081-.108.1632-.217.1632-.325 0-.1082-.055-.1618-.1632-.2158 0 0-.4328-.2165-1.1898-.541-.4866-.2162-.9179-.4326-1.1883-.5948.1623-.2704.486-.4865.9726-.7028.5407-.2163.9196-.4326 1.0818-.5948.054-.0541.054-.1078.054-.1619 0-.054-.0539-.1631-.108-.2172-.054-.054-.163-.1079-.2711-.1079zm11.247 0c-.054 0-.1618.0537-.2158.1078-.0541.1081-.1093.1632-.1093.2172v.054c.1622.1622.3797.2695.7041.3776.2704.054.5403.1632.8107.2172.3244.1082.5407.2693.6488.4856v.0553c0 .0541-.1088.1616-.3251.2698-.1082.054-.3245.2167-.5949.433-.2703.1622-.4326.3236-.5948.3776-.2163.1082-.3776.217-.4316.3252-.0541.054-.054.1077-.054.1618 0 .1081.0539.1077.108.2158.054.1081.1616.1093.2157.1093.054 0 .1078-.0554.1619-.0554.2703-.1622.6492-.3782 1.0818-.7567.4866-.3784.8655-.6484 1.0818-.8106.2163-.1082.3237-.2169.3237-.379 0-.0541.0002-.1618-.1079-.2159-.3785-.4325-.9185-.7022-1.5674-.9185-.1081-.0541-.2704-.1092-.5948-.1633-.1622-.054-.3249-.1079-.433-.1079zm-2.9743.8106c-.2704 0-.4866.055-.6488.2172-.2163.1622-.2699.4323-.2158.7567 0 .2703.1075.4865.2697.7027.1622.2163.3786.3252.5949.3252.1622 0 .2708-.0553.433-.1094.2703-.1622.379-.4319.379-.9185 0-.3785-.109-.6485-.2711-.8107-.1622-.1081-.3246-.1632-.541-.1632zm-4.4877.054c-.2704 0-.4866.055-.6488.2171-.2163.1622-.27.4323-.2158.7567 0 .2704.1075.4865.2697.7028s.3786.3251.5949.3251c.1622 0 .2708-.0552.433-.1093.2703-.1622.3776-.432.3776-.9186 0-.4325-.1075-.7025-.2697-.8106-.1622-.1082-.3247-.1633-.541-.1633zm0 .6501c.1622 0 .2711.1076.2711.2698 0 .1622-.163.2697-.2711.2697-.1622 0-.2698-.1075-.2698-.2697s.1076-.2698.2698-.2698zm4.3798.054c.1622 0 .2711.1075.2711.2697 0 .1082-.109.2698-.2711.2698-.1622 0-.2698-.1076-.2698-.2698 0-.1622.1076-.2697.2698-.2697zm-2.7032 2.1083l.1619.3237c.054.1081.1076.163.2158.2711.054.054.163.1619.2712.1619h.1078c.1082 0 .1618 0 .2158-.054.0541-.054.1632-.0538.2173-.1079l.1618-.1618c.054-.054.108-.1092.108-.1633.054-.054.0537-.1078.1078-.1618 0-.0541.054-.108.054-.108-.0541.1082-.1618.2156-.2158.3238-.1082.054-.1616.1632-.2698.1632-.1081.0541-.217.054-.3251.054s-.2157.0001-.2697-.054c-.1082 0-.1632-.0538-.2173-.1079l-.1618-.1632c-.054-.0541-.1078-.1618-.1619-.2158zm-.866 1.0278c-1.1355 0-1.8377 1.5136-3.4598.1619-.4326 2.6494 2.7583 2.866 4.11 1.7306.9192-.811.6475-1.9465-.6502-1.8925zm2.8664 0c-1.2977-.054-1.568 1.0815-.6488 1.8925 1.3518 1.1355 4.5412.9188 4.1087-1.7306-1.6221 1.3517-2.2703-.1619-3.4599-.1619z"/></svg>

<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CodeProject</title><path d="M15.644 21.576c-.837-.038-2.143.467-2.43.209-.378-.34.28-1.882.531-2.19.172-.204.452-.523.605-.663.594-.552.967-1.32.964-2.177-.004-.941-.281-1.278.659-.532.324.258.768.59 1.335.854 1.14.524-1.32-1.68-1.788-2.102-.788-.698-1.045-1.08-.609-1.353.346-.217.672-.46.977-.723 1.195-1.036 2.047-2.607 1.878-4.897-.15-2.091-4.09-7.979-5.14-8.002-.851-.018-2.58 2.107-3.527 3.256-1.028 1.247-2.637 3.408-2.958 4.677a4.726 4.726 0 0 0-.135 1.181c0 1.44.75 2.784 1.898 3.744.703.586 1.48 1.038.237 2.31-.74.76-2.433 2.363-1.452 1.91.572-.265 1-.614 1.34-.855.71-.504.99-.669.833-.03-.034.133-.028.274-.028.41 0 .893.37 1.69.95 2.278.15.154.586.486.833.7.586.506 1.196 1.864.816 2.202-.287.259-1.593-.246-2.426-.208-.837.037-2.276.566-2.239 1.563.037.998 3.17.851 3.9.858 1.645.012 1.089-.643 1.645-.631.555.016 0 .611 1.85.621.73.004 3.678.15 3.715-.847.042-.998-1.4-1.525-2.234-1.563zm-5.502 1.789c-.665.281-1.536.244-1.764-.15-.226-.398 1.138-.717 1.498-.772.359-.057 1.138-.132 1.422.396.332.613-.495.241-1.156.526zM8.257 9.099c0-.348.028-.685.103-1.007.254-1.088 1.467-2.977 2.272-4.042.744-.984 1.761-2.88 2.43-2.863.82.02 4.274 5.173 4.395 6.96.127 1.961-.535 3.305-1.47 4.193-.807.764-1.783 1.367-2.939 1.367-2.31 0-4.791-2.098-4.791-4.608zm2.129 7.714c0-1.216.994-2.204 2.221-2.204a2.21 2.21 0 0 1 2.219 2.204c0 1.218-.99 2.201-2.219 2.201a2.208 2.208 0 0 1-2.221-2.201zm1.927 4.986c-.237 0-.46-.905-.463-1.145-.007-.356.038-.755.474-.755s.47.398.473.755c.005.33-.248 1.145-.484 1.145zm3.954 1.415c-.226.395-1.1.432-1.765.15-.66-.284-1.487.087-1.155-.526.284-.527 1.063-.452 1.423-.396.358.055 1.727.375 1.497.772zM15.081 5.857c-.456 0-.85.31-1.172.775-.158.23-.45.41-.826-.23-.35-.593-.92-.922-1.508-.922-1.178 0-2.135 1.413-2.135 3.156 0 1.74.957 3.153 2.135 3.153.737 0 1.37-.557 1.769-1.39.154-.324.386-.263.566-.02.336.457.716.776 1.172.776.92 0 1.663-1.187 1.663-2.646-.001-1.466-.744-2.652-1.664-2.652zm-3.506 4.987c-.826 0-1.498-.99-1.498-2.21 0-1.226.672-2.216 1.498-2.216s1.498.99 1.498 2.217c0 1.218-.672 2.21-1.498 2.21zm3.506-.483c-.641 0-1.162-.83-1.162-1.856 0-1.028.52-1.857 1.162-1.857.644 0 1.167.829 1.167 1.857 0 1.026-.522 1.856-1.167 1.856zm.471-1.905c0 .481-.189.876-.419.876-.23 0-.418-.395-.418-.876 0-.488.188-.882.418-.882.23 0 .42.393.42.882zm-2.414 8.978a.418.418 0 0 1-.836 0c0-.229.189-.413.418-.413.228 0 .418.185.418.413zM5.57 17.36c-.165 0-1.688.02-2.163.227-.474.21.284.508.928.544.322.02.22.26.076.453-1.155 1.58-.265 1.263.513.565.192-.17.265.057.285.265.018.206.51 1.75.665-.208.063-.81.113-1.241.077-1.526-.038-.282-.193-.32-.381-.32zm12.858 0c.161 0 1.687.02 2.163.227.474.21-.284.508-.932.544-.32.02-.217.26-.076.453 1.158 1.58.268 1.263-.51.565-.192-.17-.265.057-.285.265-.021.206-.516 1.75-.665-.208-.064-.81-.113-1.241-.076-1.526.04-.282.19-.32.381-.32zm-6.254-8.812c0 .607-.235 1.101-.524 1.101-.288 0-.521-.494-.521-1.1 0-.608.233-1.101.52-1.101.289 0 .525.493.525 1.1zm3.377-.091c0 .481-.189.876-.419.876-.23 0-.418-.395-.418-.876 0-.488.188-.882.418-.882.23 0 .42.393.42.882Z"/></svg>
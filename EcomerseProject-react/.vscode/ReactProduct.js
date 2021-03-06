const e = React.createElement;

const ReactProduct = () => {
    return(
<div className="grid-container">
        <div className="grid-item  ps4__console">
                <img src="ps4-standard.webp" className="grid-item__img" alt="image of ps4 console"/>
                <h2>Sony PlayStation 4 Standard Gaming Console</h2>
                <p>$248.00</p>
                <p>Sony · PlayStation · PlayStation 4 · PlayStation 4 (Original) · 500 GB · Blu-ray 
                    Compatible · With Motion Control · PlayStation Network / Plus · PlayStation Now · Jet Black</p>
                <p><span>Type:</span> <span className="item__type">console</span></p>
                <p className="item__price">200-400</p>
                <input type="checkbox" id="product1" name="ps4-standard" value="product1" />
                <label for="product1">Buying</label>
        </div>

        <div className="grid-item ps4__console">
                <img src="ps4-slim.webp" className="grid-item__img" alt="image of ps4 slim console"/>
                <h2>Sony PlayStation 4 Slim Gaming Console</h2>
                <p>$269.00</p>
                <p>Sony · PlayStation · PlayStation 4 · PlayStation 4 Slim · 500 GB · Blu-ray Compatible · 
                    With Motion Control · PlayStation Network / Plus · PlayStation Now
                </p>
                <p><span>Type:</span> <span className="item__type">console</span></p>
                <p className="item__price">200-400</p>
                <input type="checkbox" id="product2" name="ps4-slim" value="product2" />
                <label for="product2">Buying</label>
        </div>

        <div className="grid-item ps4__console">
                <img src="ps4-pro.webp" className="grid-item__img" alt="image of ps4 pro console"/>
                <h2>Sony PlayStation 4 Pro Gaming Console</h2>
                <p>$399.99</p>
                <p>Sony · PlayStation · PlayStation 4 · PlayStation 4 Pro · 1 TB · Blu-ray Compatible · 
                    With Motion Control · PlayStation Network / Plus · PlayStation Now</p>
                <p><span>Type:</span> <span className="item__type">console</span></p>
                <p className="item__price">200-400</p>
                <input type="checkbox" id="product3" name="ps4-pro" value="product3" />
                <label for="product3">Buying</label>
        </div>

        <div className="grid-item ps4__accessorie">
                <img src="ps4-headset.webp" className="grid-item__img" alt="image of ps4 headset"/>
                <h2>Sony PlayStation 4 Wireless Platinum Headset</h2>
                <p>$112.74</p>
                <p>Sony · PlayStation · On-ear · Computer · Video Game Console · Wireless · Headset · 
                    For Gaming · Surround Sound</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">100-200</p>
                <input type="checkbox" id="product4" name="ps4-headset" value="product4" />
                <label for="product4">Buying</label>
        </div>

        <div className="grid-item ps4__accessorie">
                <img src="ps4-controller.webp" className="grid-item__img" alt="image of ps4 controller"/>
                <h2>Sony PlayStation 4 Onyx Plus Wireless Controller</h2>
                <p>$40.79</p>
                <p>HORI · ONYX · PC · PS4 · Gamepad · Wireless</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">0-50</p>
                <input type="checkbox" id="product5" name="ps4-controller" value="product5" />
                <label for="product5">Buying</label>
        </div>

        <div className="grid-item ps4__accessorie">
                <img src="ps4-vr.webp" className="grid-item__img" alt="image of ps4 vr headset"/>
                <h2>Sony PlayStation 4 VR Blood and Truth and Everybody Golf Bundle</h2>
                <p>$349.99</p>
                <p>Sony · PlayStation · PlayStation VR · 100° FOV · 120Hz · With Controller · With Headphones</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">200-400</p>
                <input type="checkbox" id="product6" name="ps4-vr" value="product6" />
                <label for="product6">Buying</label>
        </div>

        <div className="grid-item ps4__accessorie">
                <img src="ps4-hardrive.webp" className="grid-item__img" alt="image of ps4 external hardrive"/>
                <h2>Sony PlayStation 4 3.5" 2TB Hard Drive Data Bank</h2>
                <p>$19.99</p>
                <p>Sony · PlayStation · 2 TB Space· 3.5" Drive</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">0-50</p>
                <input type="checkbox" id="product7" name="ps4-hardrive" value="product7" />
                <label for="product7">Buying</label>
        </div>

        <div className="grid-item ps4__accessorie">
                <img src="ps4-ssd.webp" className="grid-item__img" alt="image of ps4 SSD"/>
                <h2>Sony PlayStation 4 SSD</h2>
                <p>$45.35</p>
                <p>Seagate · Game Drive for PS4 · 2 TB · USB · External</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">0-50</p>
                <input type="checkbox" id="product8" name="ps4-ssd" value="product8" />
                <label for="product8">Buying</label>
        </div>

        <div className="grid-item xbox__console">
                <img src="xboxone-console.webp" className="grid-item__img" alt="image of xbox one s console"/>
                <h2>Microsoft Xbox One S</h2>
                <p>$189.99</p>
                <p>Microsoft · Xbox · Xbox One · Xbox One S · 1 TB · Blu-ray Compatible · 
                    Backward Compatible · With Motion Control · Xbox Live / Live Gold</p>
                <p><span>Type:</span> <span className="item__type">console</span></p>
                <p className="item__price">100-200</p>
                <input type="checkbox" id="product9" name="xboxone-console" value="product9" />
                <label for="product9">Buying</label>
        </div>

        <div className="grid-item xbox__console">
                <img src="xboxonex-console.webp" className="grid-item__img" alt="image of xbox one x console"/>
                <h2>Microsoft Xbox One X - Black</h2>
                <p>$229.99</p>
                <p>Microsoft · Xbox · Xbox One · Xbox One X · 1 TB · Blu-ray Compatible · 
                    Backward Compatible · With Motion Control · Xbox Live / Live Gold</p>
                <p><span>Type:</span> <span className="item__type">console</span></p>
                <p className="item__price">200-400</p>
                <input type="checkbox" id="product10" name="xboxonex-console" value="product10" />
                <label for="product10">Buying</label>
        </div>

        <div className="grid-item xbox__console">
                <img src="xboxone-black.webp" className="grid-item__img" alt="image of xbox console"/>
                <h2>Xbox One</h2>
                <p>$160.00</p>
                <p>Microsoft · Xbox · Xbox One · Xbox One (Original) · 500 GB · Blu-ray Compatible · 
                    Backward Compatible · With Motion Control · Xbox Live / Live Gold</p>
                <p><span>Type:</span> <span className="item__type">console</span></p>
                <p className="item__price">100-200</p>
                <input type="checkbox" id="product11" name="xboxone-black" value="product11" />
                <label for="product11">Buying</label>
        </div>

        <div className="grid-item xbox__accessorie">
                <img src="xboxone-controller.webp" className="grid-item__img" alt="image of xbox one controller"/>
                <h2>Xbox One Wireless Controller - Elite Series 2</h2>
                <p>$79.00</p>
                <p>Microsoft · PC · Xbox One · Gamepad · Wireless</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">50-100</p>
                <input type="checkbox" id="product12" name="xboxone-controller" value="product12" />
                <label for="product12">Buying</label>
        </div>

        <div className="grid-item xbox__accessorie">
                <img src="xboxone-headset.webp" className="grid-item__img" alt="image of xbox one headset"/>
                <h2>Xbox Turtle Beach Ear Force Stealth 600X</h2>
                <p>$106.94</p>
                <p>Turtle Beach · Turtle Beach Stealth · Turtle Beach Stealth 600 · On-ear · 
                    Video Game Console · Wireless · Headset · Noise Canceling · For Gaming</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">100-200</p>
                <input type="checkbox" id="product13" name="xboxone-headset" value="product13" />
                <label for="product13">Buying</label>
        </div>

        <div className="grid-item xbox__accessorie">
                <img src="xboxone-portable.webp" className="grid-item__img" alt="image of portable xbox "/>
                <h2>Gen. 2 Case Club Xbox One X/S Portable Gaming Station</h2>
                <p>$349.95</p>
                <p>Blu-ray Compatible · Backward Compatible · With Motion Control · Xbox Live / Live Gold · Handheld</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">200-400</p>
                <input type="checkbox" id="product14" name="xboxone-portable" value="product14" />
                <label for="product14">Buying</label>
        </div>

        <div className="grid-item xbox__accessorie">
                <img src="xboxone-keyboard.webp" className="grid-item__img" alt="image of xbox one keyboard"/>
                <h2>2.4ghz Wireless Keyboard For Xbox One Accessory Controller Chatpad</h2>
                <p>$11.99</p>
                <p>Connect the keyboard to the back of the Xbox one wireless controller, and then 
                    insert the 2.4G receiver to any USB interface of the Xbox one console, then you 
                    can start the text message and email in the games to execute text input function.</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">0-50</p>
                <input type="checkbox" id="product15" name="xboxone-keyboard" value="product15" />
                <label for="product15">Buying</label>
        </div>

        <div className="grid-item xbox__accessorie">
                <img src="xboxone-fan.webp" className="grid-item__img" alt="image of xbox one fan"/>
                <h2>Xbox One Cooling Fan 3 Cooler with 2 Ports USB Hub</h2>
                <p>$15.87</p>
                <p>Xbox · Xbox One · Xbox One Cooling Fan · 2 USB Ports</p>
                <p><span>Type:</span> <span className="item__type">accessories</span></p>
                <p className="item__price">0-50</p>
                <input type="checkbox" id="product16" name="xboxone-fan" value="product16" />
                <label for="product16">Buying</label>
        </div>
        </div>
)
}
const domContainer = document.querySelector('#react-product');
ReactDOM.render(e(ReactProduct), domContainer);
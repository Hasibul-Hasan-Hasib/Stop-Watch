const start = () => {
    let ml01 = 0;
    let ml02 = 0;
    let s01 = 0;
    let s02 = 0;
    let m01 = 0;
    let m02 = 0;
    let h01 = 0;
    let h02 = 0;
    setInterval(() => {
        ml01++;
        if(ml01>9){
            ml01 = 0;
            ml02++;
            if(ml02>9){
                ml02 = 0;
                s01++;
                if(s01>9){
                    s01 = 0;
                    s02++;
                    if(s02>5){
                        s02 = 0;
                        m01++;
                        if(m01>9){
                            m01 = 0;
                            m02++;
                            if(m02>5){
                                m02 = 0;
                                h01++;
                                if(h01>9){
                                    h01 = 0;
                                    h02++;
                                    if(h02>12){
                                        ml01 = 0;
                                        ml02 = 0;
                                        s01 = 0;
                                        s02 = 0;
                                        m01 = 0;
                                        m02 = 0;
                                        h01 = 0;
                                        h02 = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log(h02,h01,m02,m01,s02,s01,ml02,ml01)
    }, 10);
    
}
start();

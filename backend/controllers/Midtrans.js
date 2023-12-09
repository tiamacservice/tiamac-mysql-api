import Service from "../models/ServisModel.js";


export const webhok = async (req, res) => {
   
    let transactionStatus = req.body.transaction_status;
    let statusTransaction="";
    if (transactionStatus == 'capture'){
	    if (fraudStatus == 'accept'){
                statusTransaction="Proses Service";
                // TODO set transaction status on your database to 'success'
                // and response with 200 OK
            }
        } else if (transactionStatus == 'settlement'){

            statusTransaction="Proses Service";
            // TODO set transaction status on your database to 'success'
            // and response with 200 OK
        } else if (transactionStatus == 'cancel' ||
          transactionStatus == 'deny' ||
          transactionStatus == 'expire'){

            statusTransaction="Pembayaran Gagal";
          // TODO set transaction status on your database to 'failure'
          // and response with 200 OK
        } else if (transactionStatus == 'pending'){

            statusTransaction="Proses Pembayaran Pending";
          // TODO set transaction status on your database to 'pending' / waiting payment
          // and response with 200 OK
        }

       
   
    
        if(transactionStatus=='settlement'){
            await Service.update(
                { 
                  status:statusTransaction
                },
                {
                  where: {
                    uuid: req.body.order_id,
                  },
                }
              );
        
            return res
            .status(200)
            .json({ success:'Berhasil' });
        }
      
   
 
  };
  
import { Subject } from "rxjs";

export class common{
    ClaimNo:any;
    PlaceLocation:any;
    items: Subject<items>= new Subject<items>();
}
export class items{
    Insuredname:any;
    Insuredcontact:any;
    TODOTask:any;
    PlaceLocation:any;
    LocationNumber:any;
}
export class submitData{
    job_create_insurer_id :any;
    date_of_registration :any;
    date_of_sale:any ;
    idv :any ;
    job_card_no :any ;
    scope_for_supplementary:any ;
    action_idv:any;
    preliminary_submit_date:any ;
    approval_remind_date:any ;
    keep_open_remind_date:any ;
    cut_open_remind_date :any;
    before_paint_remind_date:any ;
    insp_remind_date:any ;
    expected_invoice_date :any;
    expected_fsr_submit:any ;
}
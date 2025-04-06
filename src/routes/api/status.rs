use tuono_lib::Request;
use tuono_lib::axum::http::StatusCode;

#[tuono_lib::api(GET)]
pub async fn status(_req: Request) -> StatusCode {
    StatusCode::OK
}

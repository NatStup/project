from typing import Optional

from pydantic import BaseModel

class SearchSupport(BaseModel):
    direction: Optional[str] = None
    applicant_type: Optional[str] = None
    venue: Optional[str] = None
    specific_tages: Optional[str] = None
    specific_request: Optional[str] = None

using Sitecore.ContentSearch.ComputedFields;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.ComputedFields;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;

namespace Mvp.Foundation.People.ComputedFields
{
    public class PersonApplicantUrl : BaseComputedField, IComputedIndexField
    {
        public object ComputeFieldValue(IIndexable indexable)
        {
            Item item = (Item)(indexable as SitecoreIndexableItem);
            if (item != null && item.TemplateID.Equals(Constants.Templates.Person))
            {
                var friendlyUrl = Sitecore.Links.LinkManager.GetItemUrl(item);
                if (!string.IsNullOrEmpty(friendlyUrl))
                    return friendlyUrl;
            }
            return string.Empty;
        }

        public string FieldName { get; set; }

        public string ReturnType { get; set; }
    }
}

from v1.apps.parsers import parse_base

def parse_user(user):
    try:
        result = parse_base(user)
        result.update({
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "admin": user.admin,
            "image": user.image,
        })
        return result
    except AttributeError:
        return None

def parse_user_detailed(user):
    try:
        result = parse_user(user)
        result.update({
            "campaigns": parse_user_campaigns(user.campaigns)
        })
        return result
    except AttributeError:
        return None

def parse_user_campaign(campaign):
    try:
        return ({
            "id": campaign.id,
            "name": campaign.name,
            "slug": campaign.slug,
            "image": campaign.header_image,
            "owner": campaign.owner.username,
        })
    except AttributeError:
        return None

def parse_user_campaigns(campaigns):
    campaign_set = []
    for campaign in campaigns:
        campaign_set.append(parse_user_campaign(campaign))
    return(campaign_set)
